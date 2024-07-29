import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { colorBleuFonce, colorBlue } from "utils/color";

const historiques = [
  {
    nRDV: "#0001",
    dateRDV: "01/01/2024",
    nomClient: "Mr Kouadio Ali",
    adresseClient: "Rue Washington, Cocody, Abidjan, Côte d'Ivoire",
    paymentClient: "Payement Orange Money",
    devis: "Devis étabi",
    descriptionTacheClient: "Réparation de mon robinet"
  },
  {
    nRDV: "#0002",
    dateRDV: "01/01/2024",
    nomClient: "Mr Kouadio Ali",
    adresseClient: "Rue Washington, Cocody, Abidjan, Côte d'Ivoire",
    paymentClient: "Payement Orange Money",
    Devis: "Pas de devis demandé",
    descriptionTacheClient: "Réparation de mon robinet"
  }
];

export const AfficheHistoriqueArtisan: FC = () => {
  return (
    <>
      <Typography gutterBottom variant="h5" component="h1" color={colorBlue}>
        Mon historique
      </Typography>
      <Stack spacing={2} useFlexGap>
        {historiques.map((historique) => (
          <Box key={historique.nRDV}>
            <Stack direction="column" spacing={1} useFlexGap sx={{ width: "100%", mb: 1 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6" component="p" gutterBottom color={colorBleuFonce}>
                    {historique.nRDV} - {historique.dateRDV}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Nom du client :
                  </Typography>
                  <Typography gutterBottom>{historique.nomClient}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Addresse du client :
                  </Typography>
                  <Typography gutterBottom>{historique.adresseClient}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Mode de payement du client :
                  </Typography>
                  <Typography gutterBottom>{historique.paymentClient}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Devis du client :
                  </Typography>
                  <Typography gutterBottom>{historique.devis}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom color="text.secondary" component="span">
                    Description de la tâche du client :
                  </Typography>
                  <Typography gutterBottom>{historique.descriptionTacheClient}</Typography>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" />
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );
};
