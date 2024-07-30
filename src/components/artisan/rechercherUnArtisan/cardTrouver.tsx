import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";
import activite from "images/autres/activite.png";
import { FC } from "react";
import { Link } from "react-router-dom";
import { colorGrisPale } from "utils/color";
import { TextRating } from "./textRating";

type TCardTrouver = {
  titre: string;
  description: string;
  numero: string;
  notation: number;
};

// Composant pour afficher une carte d'un artisan avec informations et actions
export const CardTrouver: FC<TCardTrouver> = ({ titre, description, numero, notation }) => {
  return (
    <Container maxWidth="lg" sx={{ mb: 2, py: 3 }}>
      <Grid container>
        {/* Section image */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{ bgcolor: colorGrisPale, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            component="img"
            sx={{ height: 150, width: 150, objectFit: "cover" }} // Utilisation de objectFit pour un meilleur ajustement
            alt="Image de l'artisan"
            src={activite}
          />
        </Grid>
        {/* Section contenu de la carte */}
        <Grid item xs={12} md={9}>
          <Card>
            <CardHeader
              title={
                <Typography
                  variant="h6"
                  component={Link}
                  to="/trouver-un-artisan/1"
                  sx={{ textDecoration: "none", color: "inherit" }} // Styles pour le lien
                >
                  {titre}
                </Typography>
              }
            />
            <CardContent sx={{ bgcolor: colorGrisPale }}>
              <Box display="flex" alignItems="center">
                <WorkIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2">{description}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sx={{ display: { xs: "flex", lg: "block" }, justifyContent: "center", alignItems: "center" }}
                >
                  <TextRating valeur={notation} />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Button
                    component="a"
                    href={`https://wa.me/${numero}`}
                    target="_blank"
                    variant="contained"
                    color="primary"
                    startIcon={<WifiCalling3Icon />}
                    size="small"
                    disableRipple
                    fullWidth
                  >
                    {numero}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Button
                    component={Link}
                    to="/espace-membre/obtenir-un-rendez-vous"
                    variant="contained"
                    color="warning"
                    size="small"
                    disableRipple
                    fullWidth
                  >
                    Rendez-vous
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Button
                    component={Link}
                    to="/espace-membre/obtenir-un-devis"
                    variant="outlined"
                    color="success"
                    size="small"
                    disableRipple
                    fullWidth
                  >
                    Demander un devis
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
