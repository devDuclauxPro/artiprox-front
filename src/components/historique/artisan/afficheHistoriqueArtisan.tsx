import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { colorBleuFonce, colorBlue } from "utils/color";

const historiques = [
  {
    nRDV: "#0001",
    dateRDV: "01/01/2024",
    nomClient: "Mr exemple",
    adresseClient: "Rue exemple, Côte d'Ivoire",
    paymentClient: "Payement Orange Money",
    devis: "Devis établi",
    descriptionTacheClient: "Réparation de mon robinet"
  },
  {
    nRDV: "#0002",
    dateRDV: "01/01/2024",
    nomClient: "Mr exemple",
    adresseClient: "Rue exemple, Côte d'Ivoire",
    paymentClient: "Payement Orange Money",
    devis: "Pas de devis demandé",
    descriptionTacheClient: "Réparation de mon robinet"
  }
];

const HistoriqueItem: FC<{ historique: (typeof historiques)[0] }> = ({ historique }) => (
  <Box key={historique.nRDV}>
    <Stack direction="column" spacing={1} useFlexGap sx={{ width: "100%", mb: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="p" color={colorBleuFonce}>
            {historique.nRDV} - {historique.dateRDV}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom color="text.secondary">
            Nom du client : {historique.nomClient}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom color="text.secondary">
            Adresse du client : {historique.adresseClient}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom color="text.secondary">
            Mode de paiement du client : {historique.paymentClient}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom color="text.secondary">
            Devis du client : {historique.devis}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom color="text.secondary">
            Description de la tâche du client : {historique.descriptionTacheClient}
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
    </Stack>
  </Box>
);

export const AfficheHistoriqueArtisan: FC = () => (
  <>
    <Typography gutterBottom variant="h5" color={colorBlue}>
      Mon historique
    </Typography>
    <Stack spacing={2} useFlexGap>
      {historiques.map((historique) => (
        <HistoriqueItem historique={historique} key={historique.nRDV} />
      ))}
    </Stack>
  </>
);
