import { yupResolver } from "@hookform/resolvers/yup";
import ArticleIcon from "@mui/icons-material/Article";
import { Avatar, Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { LoadingIndicator } from "animations/threeDots";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { roleValidation } from "utils/yupValidation";
import { AfficherRole } from "./afficherRole";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  nom_role: string;
};

export const FormRole: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(roleValidation)
  });
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state: RootState) => state.user);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      if (!apiUrl) {
        toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
        return;
      }
      const response = await axios.post(`${apiUrl}/roles`, { ...data }, configureAxiosHeaders(token ?? ""));
      toast.success(response.data.categorie);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
        toast.error("Les informations fournies sont incorrectes. Veuillez les vérifier, puis réessayer");
      } else {
        toast.error(`Erreur inconnue: ${error}`);
        console.error("Erreur inconnue:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
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
            <ArticleIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
            Formulaire de rôle des utilisateurs
          </Typography>
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="nomRole">Nom du role</FormLabel>
              <TextField
                {...register("nom_role")}
                id="nomRole"
                type="text"
                placeholder="Ajouter un nom au rôle"
                autoComplete="nom role"
                error={!!errors.nom_role}
                helperText={errors.nom_role?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button type="submit" variant="contained" color="success" disableRipple>
              Créer
            </Button>
          </FormGrid>
        </Grid>
      </Box>
      {loading ? (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <LoadingIndicator />
          <Typography variant="caption" component="h1" color={colorBlue}>
            Veuillez patienter quelques secondes...
          </Typography>
        </Box>
      ) : (
        <AfficherRole />
      )}
      <ToastContainer />
    </Container>
  );
};
