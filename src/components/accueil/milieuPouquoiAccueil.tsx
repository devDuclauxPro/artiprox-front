import { Container, Grid } from "@mui/material";
import { FC } from "react";
import { itemsLeft } from "utils/icons";
import { itemMilieuDroitPourquoi } from "utils/imageList";
import { MilieuDroitPourquoi } from "./milieuDroitPourquoi";
import { MilieuGauchePourquoi } from "./milieuGauchePourquoi";

// Composant principal pour afficher les sections "Pourquoi" sur la page d'accueil
export const MilieuPourquoiAccueil: FC = () => {
  return (
    <Container maxWidth="lg" component="section" sx={{ py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MilieuGauchePourquoi
            title="Arti-prox :"
            subtitle="Pourquoi faire appel à nous ?"
            introduction="Nous savons qu'il n'est pas toujours simple de trouver le bon artisan. Partant de ce constat, nous avons créé en 2024 un service de mise en relation. Depuis, nous l'améliorons sans cesse grâce à vos retours. Déjà porteurs de plus de 100 projets, notre objectif se résume simplement : vous assurer la bonne rencontre."
            accompaniment="Pour le permettre, nous offrons un accompagnement de tous les instants et leur assurons une meilleure visibilité."
            items={itemsLeft}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MilieuDroitPourquoi items={itemMilieuDroitPourquoi} cols={3} gap={10} width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};
