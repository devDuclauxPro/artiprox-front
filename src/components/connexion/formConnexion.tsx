import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, FormControl, FormLabel, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { colorBlue, colorVertNature } from "utils/color";
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schemaConnexion)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, minHeight: "80vh" }}>
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
                name="email"
                type="email"
                placeholder="Ex: exemple@gmail.com"
                autoComplete="email"
                required
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
                name="password"
                type="password"
                placeholder="**********"
                autoComplete="current password"
                required
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
    </Container>
  );
};
