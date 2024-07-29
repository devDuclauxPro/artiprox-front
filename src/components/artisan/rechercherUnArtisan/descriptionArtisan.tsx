import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import { colorBlack, colorBleuFonce } from "utils/color";

// Composant DescriptionArtisan affichant des informations sur les résultats de recherche
export const DescriptionArtisan: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box component="section" py={5}>
        <Typography
          variant="h5"
          component="p"
          sx={{ fontSize: { xs: ".9rem", sm: "1.2rem", md: "1.5rem" }, fontWeight: 300 }}
          aria-label="Titre de la recherche"
        >
          Résultat de votre recherche :
        </Typography>
        <Typography
          variant="h4"
          component="p"
          mt={2}
          mb={1}
          color={colorBleuFonce}
          sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, fontWeight: 800 }}
        >
          Rénovation d'appartement / de maison à Abidjan (Abobo)
        </Typography>
        <Typography variant="body1" component="p" sx={{ fontSize: { xs: ".8rem", sm: "1.3rem" }, fontWeight: 300 }}>
          Professionnels disponibles :
          <Typography
            variant="h6"
            component="span"
            color={colorBlack}
            sx={{ ml: 0.5 }} // Espacement entre le texte et le nombre
          >
            28
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};
