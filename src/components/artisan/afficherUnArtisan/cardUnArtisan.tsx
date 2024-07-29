import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { colorGrisPale } from "utils/color";
import { listImage } from "utils/listImage";
import { TextRating } from "../rechercherUnArtisan/textRating";
import { PhotoSwiper } from "./photoSwiper";

export const CardUnArtisan: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 2, py: 3 }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<Typography variant="h6">PULS GROUPE RENOVATION</Typography>} />
            <CardContent sx={{ bgcolor: colorGrisPale }}>
              <Box display="flex" alignItems="center">
                <WorkIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  Autres activités : Rénovation plomberie complète ou partielle, Cloisons, Autres activités : Rénovation
                  plomberie complète ou partielle, Cloisons, Autres activités
                </Typography>
              </Box>
              <PhotoSwiper listImage={listImage} />
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sx={{ display: { xs: "flex", lg: "block" }, justifyContent: "center", alignItems: "center" }}
                >
                  <TextRating valeur={2} />
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Button
                    component="a"
                    href="tel:0707070707"
                    variant="contained"
                    color="primary"
                    startIcon={<WifiCalling3Icon />}
                    size="small"
                    disableRipple
                    fullWidth
                  >
                    +2250707070707
                  </Button>
                </Grid>
                <Grid item xs={12} md={5} lg={3}>
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
                <Grid item xs={12} md={7} lg={3}>
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
