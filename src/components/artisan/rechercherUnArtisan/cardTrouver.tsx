import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";
import activite from "images/autres/activite.png";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IArtisan } from "reducerToolkitStore/features/trouverArtisan";
import { RootState } from "reducerToolkitStore/store/store";
import { colorGrisPale } from "utils/color";
import { TextRating } from "./textRating";

export const CardTrouver: FC<IArtisan> = ({ id, nom, prenoms, description, numero_telephone, notation }) => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <Container maxWidth="lg" sx={{ mb: 2, py: 3 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ bgcolor: colorGrisPale, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            component="img"
            sx={{ height: 150, width: 150, objectFit: "cover" }}
            alt="Image de l'artisan"
            src={activite}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Card>
            <CardHeader
              title={
                <Typography
                  variant="h6"
                  component={Link}
                  to={`/espace-membre/trouver-un-artisan/${id}`}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {nom} {prenoms}
                </Typography>
              }
            />
            <CardContent sx={{ bgcolor: colorGrisPale }}>
              <Box display="flex" alignItems="center">
                <WorkIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  Activités : {description}
                </Typography>
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
                {user?.role_id && (
                  <Grid item xs={12} md={4} lg={3}>
                    <Button
                      component="a"
                      href={`https://wa.me/${numero_telephone}`}
                      target="_blank"
                      variant="contained"
                      color="primary"
                      startIcon={<WifiCalling3Icon />}
                      size="small"
                      disableRipple
                      fullWidth
                      aria-label="Appeler l'artisan"
                    >
                      {numero_telephone}
                    </Button>
                  </Grid>
                )}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Button
                    component={Link}
                    to="/espace-membre/obtenir-un-rendez-vous"
                    variant="contained"
                    color="warning"
                    size="small"
                    disableRipple
                    fullWidth
                    aria-label="Obtenir un rendez-vous"
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
                    aria-label="Demander un devis"
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
