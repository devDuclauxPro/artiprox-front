import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlack, colorBleuFonce } from "utils/color";

export const DescriptionArtisan: FC = () => {
  // Sélectionner les données nécessaires depuis le store Redux
  const { resultatArtisans, rechercheArtisan } = useSelector((state: RootState) => state.trouverArtisan);

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
          aria-label="Métier et ville recherchés"
        >
          {rechercheArtisan?.metier || rechercheArtisan?.ville
            ? `${rechercheArtisan?.metier} à ${rechercheArtisan?.ville}`
            : "Recherche par défaut"}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontSize: { xs: ".8rem", sm: "1.3rem" }, fontWeight: 300 }}
          aria-label="Nombre de professionnels disponibles"
        >
          Professionnels disponibles :
          <Typography variant="h6" component="span" color={colorBlack} sx={{ ml: 0.5 }}>
            {resultatArtisans?.length}
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};
