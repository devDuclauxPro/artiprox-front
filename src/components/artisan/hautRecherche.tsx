import { Autocomplete, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { colorBlue, colorGris2 } from "utils/color";
import { metiers, villes } from "utils/recherche";

export const HautRecherche: FC = () => {
  return (
    // Section principale avec une marge en haut et une hauteur minimale de 80vh
    <Box component="section" mt={8}>
      {/* Conteneur avec un fond gris et un padding vertical */}
      <Box bgcolor={colorGris2} py={8}>
        <Container maxWidth="lg">
          {/* Formulaire de recherche */}
          <form>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3}>
                <Typography color={colorBlue} variant="h6" textAlign={{ xs: "left", sm: "center", md: "right" }}>
                  Trouver un artisan
                </Typography>
              </Grid>
              {/* Champ Autocomplete pour sélectionner un métier */}
              <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                  disablePortal
                  id="metier-box"
                  options={metiers}
                  size="small"
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Sélectionner un métier" />}
                />
              </Grid>
              {/* Champ Autocomplete pour sélectionner une ville */}
              <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                  disablePortal
                  id="ville-box"
                  options={villes}
                  size="small"
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Sélectionner une ville" />}
                />
              </Grid>
              {/* Bouton de recherche */}
              <Grid item xs={12} md={3} display="flex" justifyContent={{ xs: "center", md: "left" }}>
                <Button variant="contained" size="small" fullWidth color="success" disableRipple>
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
