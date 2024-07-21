import { Autocomplete, Box, Button, Grid, TextField, Typography } from "@mui/material";
import artisan from "images/home/artisan2.jpg";
import { FC } from "react";
import { formAutocompleteStyle } from "styles/form";
import { colorOrange, colorWhite } from "utils/color";
import { metiers, villes } from "utils/recherche";

// Composant fonctionnel pour la section d'accueil
export const HautAccueil: FC = () => {
  return (
    <Box
      component="section"
      mt={8}
      py={1}
      height="100vh"
      sx={{
        backgroundImage: `url(${artisan})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      display={{ xs: "none", md: "flex" }} // Masquer sur les petits écrans
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb={4} // Ajout d'une marge inférieure pour espacer du formulaire
      >
        <Typography
          variant="h3"
          component="p"
          textAlign="center"
          color={colorWhite}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          En Afrique,
        </Typography>
        <Typography
          variant="h3"
          component="p"
          textAlign="center"
          color={colorWhite}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          nous allons vous (re)donner envie
        </Typography>
        <Typography
          variant="h3"
          component="p"
          textAlign="center"
          color={colorOrange}
          pb={3}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          de faire des travaux
        </Typography>
      </Box>

      {/* Conteneur du formulaire avec une largeur de 50% pour les grands écrans  */}
      <Box width="50vw">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography color={colorWhite} variant="h5" component="p" sx={{ fontSize: { xs: "1rem", md: "2rem" } }}>
                Je recherche
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                disablePortal
                id="metier-box"
                options={metiers}
                size="small"
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Sélectionner un métier" sx={formAutocompleteStyle} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                disablePortal
                id="ville-box"
                options={villes}
                size="small"
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Sélectionner une ville" sx={formAutocompleteStyle} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" size="small" color="warning" fullWidth disableRipple>
                Rechercher
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};
