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

export const CardTrouver: FC<IArtisan> = ({ id, nom, prenoms, description, numero_telephone, notations, metier }) => {
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
                  to={`/trouver-un-artisan/${id}`}
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
                  {metier} : {description}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid item xs={12} sx={{ display: { xs: "flex" }, justifyContent: "center", alignItems: "center" }}>
                  <TextRating valeur={notations?.[notations?.length - 1]?.note || 0} />
                </Grid>
                {user?.role_id && (
                  <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
                  <Button
                    component={Link}
                    to={`/obtenir-un-devis/${id}`}
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
