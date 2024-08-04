import { Box, Typography } from "@mui/material";
import artisan from "images/home/artisan2.jpg";
import { FC } from "react";
import { colorOrange, colorWhite } from "utils/color";

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
    </Box>
  );
};
