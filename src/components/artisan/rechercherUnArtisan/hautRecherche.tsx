import { Autocomplete, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { colorBlue, colorGris2 } from "utils/color";
import { metiers, villes } from "utils/recherche";

// Composant HautRecherche pour la barre de recherche en haut de la page
export const HautRecherche: FC = () => {
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ajoutez ici la logique de recherche
  };

  return (
    <Box component="section" mt={8}>
      <Box bgcolor={colorGris2} py={8}>
        <Container maxWidth="lg">
          <form onSubmit={handleSubmit}>
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
                  renderInput={(params) => <TextField {...params} label="Sélectionner un métier" />}
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
                  renderInput={(params) => <TextField {...params} label="Sélectionner une ville" />}
                  aria-label="Sélectionner une ville"
                />
              </Grid>
              <Grid item xs={12} md={3} display="flex" justifyContent={{ xs: "center", md: "left" }}>
                <Button type="submit" variant="contained" size="small" fullWidth color="success" disableRipple>
                  Trouver !
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </Box>
  );
};
