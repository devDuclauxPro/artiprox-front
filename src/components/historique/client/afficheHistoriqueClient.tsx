import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { TextRating } from "components/artisan/rechercherUnArtisan/textRating";
import { FC } from "react";
import { colorBleuFonce, colorBlue } from "utils/color";

const historiques = [
  {
    nRDV: "#0001",
    dateRDV: "01/01/2024",
    nomArtisan: "Mr Kouadio Ali",
    adresseClient: "Rue Washington, Cocody, Abidjan, Côte d'Ivoire",
    paymentClient: "Paiement Orange Money",
    evaluationArtisan: "3/5",
    descriptionTacheClient: "Réparation de mon robinet"
  },
  {
    nRDV: "#0002",
    dateRDV: "01/01/2024",
    nomArtisan: "Mr Kouadio Ali",
    adresseClient: "Rue Washington, Cocody, Abidjan, Côte d'Ivoire",
    paymentClient: "Paiement Orange Money",
    evaluationArtisan: "2/5",
    descriptionTacheClient: "Réparation de mon robinet"
  }
];

export const AfficheHistoriqueClient: FC = () => {
  return (
    <>
      <Typography gutterBottom variant="h5" component="h1" color={colorBlue}>
        Mon historique
      </Typography>
      <Stack spacing={2} useFlexGap>
        {historiques.map((historique) => (
          <Box key={historique.nRDV}>
            <Stack direction="column" spacing={1} useFlexGap sx={{ width: "100%", mb: 2 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6" component="p" gutterBottom color={colorBleuFonce}>
                    {historique.nRDV} - {historique.dateRDV}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Nom de l'artisan :
                  </Typography>
                  <Typography gutterBottom>{historique.nomArtisan}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Adresse du client :
                  </Typography>
                  <Typography gutterBottom>{historique.adresseClient}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Mode de paiement :
                  </Typography>
                  <Typography gutterBottom>{historique.paymentClient}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Évaluation de l'artisan :
                  </Typography>
                  <Typography gutterBottom>
                    <TextRating valeur={parseInt(historique.evaluationArtisan.split("/")[0])} />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Description de la tâche :
                  </Typography>
                  <Typography gutterBottom>{historique.descriptionTacheClient}</Typography>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" sx={{ mt: 2 }} />
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );
};
