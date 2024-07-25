import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { TextRating } from "components/artisan/textRating";
import { FC } from "react";
import { colorBleuFonce } from "utils/color";
import { Info } from "./info";
import { InfoMobile } from "./infoMobile";

const historiques = [
  {
    nRDV: "#0001",
    dateRDV: "01/01/2024",
    nomArtisan: "Mr Kouadio Ali",
    adresseClient: "Rue Washington, Cocody, Abidjan, Côte d'Ivoire",
    paymentClient: "Payement Orange Money",
    evaluationArtisan: "3/5",
    descriptionTacheClient: "Réparation de mon robinet"
  },
  {
    nRDV: "#0002",
    dateRDV: "01/01/2024",
    nomArtisan: "Mr Kouadio Ali",
    adresseClient: "Rue Washington, Cocody, Abidjan, Côte d'Ivoire",
    paymentClient: "Payement Orange Money",
    evaluationArtisan: "2/5",
    descriptionTacheClient: "Réparation de mon robinet"
  }
];

export const Verifier: FC = () => {
  return (
    <Box minHeight="80vh">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            alignItems: "start",
            pt: 4,
            px: 10,
            gap: 4
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, width: "100%", maxWidth: 500 }}>
            <Info nomArtisan={"Kpan Emmanuel grand"} />
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 }
          }}
        >
          <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                ":last-child": { pb: 2 }
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Artisan sélectionné
                </Typography>
                <Typography variant="body1">{"Kpan Emmanuel mobile"}</Typography>
              </div>
              <InfoMobile nomArtisan={"Kpan Emmanuel mobile"} />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" }
            }}
          >
            <Stack spacing={2} useFlexGap py={5}>
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
                          Nom de l'artisan :
                        </Typography>
                        <Typography gutterBottom>{historique.nomArtisan}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom color="text.secondary" component="span">
                          addresse client :
                        </Typography>
                        <Typography gutterBottom>{historique.adresseClient}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom color="text.secondary" component="span">
                          Mode de payement :
                        </Typography>
                        <Typography gutterBottom>{historique.paymentClient}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom color="text.secondary" component="span">
                          Evaluation de l'artisan :
                        </Typography>
                        <Typography gutterBottom>
                          <TextRating valeur={parseInt(historique.evaluationArtisan)} />
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom color="text.secondary" component="span">
                          Description de la tâche :
                        </Typography>
                        <Typography gutterBottom>{historique.descriptionTacheClient}</Typography>
                      </Grid>
                    </Grid>
                    <Divider variant="fullWidth" />
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
