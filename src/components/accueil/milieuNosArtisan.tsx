import { Box, Container, Typography } from "@mui/material";
import { zoomInOutGenericOne } from "animations/animation";
import { BtnGeneric } from "components/generic/btnGeneric";
import { FC } from "react";
import { colorGris } from "utils/color";
import { listImage } from "utils/listImage";
import { ImageSwiper } from "./imageSwiper";

// Composant pour afficher une section dédiée à la présentation des artisans
export const MilieuNosArtisan: FC = () => {
  return (
    <Box bgcolor={colorGris} py={4}>
      {" "}
      {/* Augmenté le padding vertical pour améliorer l'espacement */}
      <Container maxWidth="lg">
        {/* Titre de la section */}
        <Typography
          variant="h4"
          component="h2" // Utilisation de <h2> pour le titre de la section (plus sémantique)
          textAlign="center"
          gutterBottom // Ajout d'un espace en bas du titre
        >
          Nos artisans
        </Typography>
        {/* Description sous le titre */}
        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          sx={{ mb: 4 }} // Marge inférieure pour espacer de la section suivante
        >
          Découvrez une sélection d'artisans de votre région.
        </Typography>
        {/* Composant pour afficher les images avec un slider */}
        <ImageSwiper listImage={listImage} />
        {/* Bouton centré pour action */}
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <BtnGeneric
            btnText="Trouver un artisan"
            btnLink="trouver-un-artisan"
            btnZooInOutCard={zoomInOutGenericOne}
            btnVariant="outlined"
          />
        </Box>
      </Container>
    </Box>
  );
};
