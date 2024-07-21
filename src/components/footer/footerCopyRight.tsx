import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { colorWhite } from "utils/color";

// Composant pour afficher le texte de droit d'auteur dans le pied de page
export const FooterCopyRight: FC = () => {
  return (
    <Box
      paddingY={1} // Espacement vertical autour du contenu
      display="flex"
      justifyContent="center" // Centre le contenu horizontalement
      alignItems="center" // Centre le contenu verticalement
    >
      <Typography
        variant="subtitle2"
        component="p"
        color={colorWhite} // Couleur du texte
      >
        &copy; 2024 ArtiProx. Tous droits réservés.
      </Typography>
    </Box>
  );
};
