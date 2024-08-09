import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { schemaModifPass } from "utils/yupValidation";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  ancienPassword: string;
  nouveauPassword: string;
};

export const FormModPasse: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schemaModifPass)
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      await axios.put(
        `${apiUrl}/users/update/password`,
        { password: data.nouveauPassword },
        configureAxiosHeaders(token ?? "")
      );
      toast.success("Modification réussie !");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || error.response?.data?.errors?.["password"] || "Une erreur est survenue.";
        toast.error(`${errorMessage}`);
      } else {
        toast.error("Une erreur inconnue est survenue.");
      }
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
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
            Modifier mon mot de passe
          </Typography>
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="ancienPassword">Ancien mot de passe</FormLabel>
              <TextField
                {...register("ancienPassword")}
                id="ancienPassword"
                type="password"
                placeholder="**********"
                autoComplete="current-password"
                required
                error={!!errors.ancienPassword}
                helperText={errors.ancienPassword?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="nouveauPassword">Nouveau mot de passe</FormLabel>
              <TextField
                {...register("nouveauPassword")}
                id="nouveauPassword"
                type="password"
                placeholder="**********"
                autoComplete="new-password"
                required
                error={!!errors.nouveauPassword}
                helperText={errors.nouveauPassword?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button type="submit" variant="contained" color="success" disableRipple>
              Modifier
            </Button>
          </FormGrid>
        </Grid>
      </Box>
      <ToastContainer />
    </Container>
  );
};
