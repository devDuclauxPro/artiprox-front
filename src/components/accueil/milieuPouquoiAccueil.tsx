import { Container, Grid } from "@mui/material";
import { FC } from "react";
import { MilieuDroitPourquoi } from "./milieuDroitPourquoi";
import { MilieuGauchePourquoi } from "./milieuGauchePourquoi";

// Composant principal pour afficher les sections "Pourquoi" sur la page d'accueil
export const MilieuPourquoiAccueil: FC = () => {
  return (
    <Container
      maxWidth="lg" // Limite la largeur du conteneur à "large"
      component="section" // Définit le rôle sémantique du conteneur
      sx={{ py: 5 }} // Padding vertical pour espacer le contenu
    >
      <Grid container spacing={2}>
        {/* Section de gauche */}
        <Grid item xs={12} md={6}>
          <MilieuGauchePourquoi />
        </Grid>
        {/* Section de droite */}
        <Grid item xs={12} md={6}>
          <MilieuDroitPourquoi />
        </Grid>
      </Grid>
    </Container>
  );
};
