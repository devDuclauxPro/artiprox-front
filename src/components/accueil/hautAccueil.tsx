import { Autocomplete, Box, Button, Grid, TextField, Typography } from "@mui/material";
import artisan from "images/home/artisan2.jpg";
import { FC } from "react";
import { formAutocompleteStyle } from "styles/form";
import { colorOrange, colorWhite } from "utils/color";
import { metiers, villes } from "utils/recherche";

type OptionType = { label: string };

// Composant réutilisable pour le titre
const Title: FC<{ text: string; color?: string }> = ({ text, color = colorWhite }) => (
  <Typography
    variant="h3"
    component="p"
    textAlign="center"
    color={color}
    sx={{ fontSize: { xs: "2rem", md: "3rem" }, userSelect: "none" }}
  >
    {text}
  </Typography>
);

// Composant réutilisable pour le champ de formulaire
const FormField: FC<{ id: string; label: string; options: OptionType[] }> = ({ id, label, options }) => (
  <Autocomplete
    disablePortal
    id={id}
    options={options}
    getOptionLabel={(option) => option.label}
    size="small"
    sx={{ width: "100%" }}
    renderInput={(params) => <TextField {...params} label={label} sx={formAutocompleteStyle} />}
  />
);

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
      display={{ xs: "none", md: "flex" }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={4}>
        <Title text="En Afrique," />
        <Title text="nous allons vous (re)donner envie" />
        <Title text="de faire des travaux" color={colorOrange} />
      </Box>

      <Box width="50vw">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography color={colorWhite} variant="h5" component="p" sx={{ fontSize: { xs: "1rem", md: "2rem" } }}>
                Je recherche
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField id="metier-box" label="Sélectionner un métier" options={metiers} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField id="ville-box" label="Sélectionner une ville" options={villes} />
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
