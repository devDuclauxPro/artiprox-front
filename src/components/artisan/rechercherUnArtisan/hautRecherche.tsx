import { Autocomplete, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { colorBlue, colorGris2 } from "utils/color";
import { metiers, villes } from "utils/recherche";

type Inputs = {
  metier: string;
  ville: string;
};

// Composant HautRecherche pour la barre de recherche en haut de la page
export const HautRecherche: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Box component="section" mt={8}>
      <Box bgcolor={colorGris2} py={8}>
        <Container maxWidth="lg">
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3}>
                <Typography color={colorBlue} variant="h6" textAlign={{ xs: "left", sm: "center", md: "right" }}>
                  Trouver un artisan
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                  disablePortal
                  id="metier-box"
                  options={metiers}
                  size="small"
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...register("metier")} {...params} label="Sélectionner un métier" />
                  )}
                  aria-label="Sélectionner un métier"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                  disablePortal
                  id="ville-box"
                  options={villes}
                  size="small"
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...register("ville")} {...params} label="Sélectionner une ville" />
                  )}
                  aria-label="Sélectionner une ville"
                />
              </Grid>
              <Grid item xs={12} md={3} display="flex" justifyContent={{ xs: "center", md: "left" }}>
                <Button type="submit" variant="contained" size="small" fullWidth color="success" disableRipple>
                  Trouver !
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
