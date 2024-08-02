import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, FormControl, FormLabel, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { LoadingIndicator } from "animations/threeDots";
import axios from "axios";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toastify
import { connexion } from "reducerToolkitStore/features/user";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { schemaConnexion } from "utils/yupValidation";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  email: string;
  password: string;
};

export const FormConnexion: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schemaConnexion)
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      if (!apiUrl) {
        toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
        return;
      }
      const response = await axios.post(`${apiUrl}/login`, data);
      console.log(response.data);
      if (response.status === 200) {
        dispatch(
          connexion({
            user: response.data.user_info,
            token: response.data.access_token
          })
        );
        toast.success("Connexion réussie !");
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error);
        toast.error(
          `Les informations de connexion fournies sont incorrectes. Veuillez vérifier votre email et votre mot de passe, puis réessayer`
        );
      } else {
        toast.error(`Erreur inconnue: ${error}`);
        console.error("Erreur inconnue:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, minHeight: "80vh" }}>
      {loading ? (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <LoadingIndicator />
          <Typography variant="caption" component="h1" color={colorBlue}>
            Veuillez patienter quelques secondes...
          </Typography>
        </Box>
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: colorVertNature }}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
                Formulaire de connexion
              </Typography>
            </Grid>
          </Grid>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} py={3}>
            <Grid container spacing={3}>
              <FormGrid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextField
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Ex: exemple@gmail.com"
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </FormControl>
              </FormGrid>
              <FormGrid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <FormLabel htmlFor="password">Mot de passe</FormLabel>
                  <TextField
                    {...register("password")}
                    id="password"
                    type="password"
                    placeholder="**********"
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </FormControl>
              </FormGrid>
              <FormGrid item xs={12}>
                <Button type="submit" variant="contained" color="success" disableRipple fullWidth>
                  Se connecter
                </Button>
              </FormGrid>
            </Grid>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs>
              <Link to="/mot-passe-oublie" style={{ textDecoration: "none" }}>
                Mot de passe oublié ?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/inscription" style={{ textDecoration: "none" }}>
                Vous n'avez pas de compte ? S'inscrire
              </Link>
            </Grid>
          </Grid>
        </>
      )}
      <ToastContainer />
    </Container>
  );
};
