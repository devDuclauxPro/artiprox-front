import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, FormControl, FormLabel, Grid, OutlinedInput, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";
import { Link } from "react-router-dom";
import { colorBlue, colorVertNature } from "utils/color";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export const FormConnexion: FC = () => {
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
      <Box component="form" py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="email">Email</FormLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                placeholder="Votre adresse e-mail"
                autoComplete="email"
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="password">Mot de passe</FormLabel>
              <OutlinedInput
                id="password"
                name="password"
                type="password"
                placeholder="**********"
                autoComplete="current-password"
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button variant="contained" color="success" disableRipple fullWidth>
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
