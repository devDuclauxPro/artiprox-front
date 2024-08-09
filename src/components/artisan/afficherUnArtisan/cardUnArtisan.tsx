import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";
import { ImageSwiper } from "animations/imageSwiper";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "reducerToolkitStore/store/store";
import { colorGrisPale } from "utils/color";
import { apiUrl } from "utils/config";
import { TextRating } from "../rechercherUnArtisan/textRating";

export const CardUnArtisan: FC = () => {
  const { user, token } = useSelector((state: RootState) => state.user);
  const { resultatUnSeulArtisans } = useSelector((state: RootState) => state.trouverArtisan);
  const { id } = useParams<{ id: string }>();
  const [value, setValue] = useState<number>(0);
  console.log(resultatUnSeulArtisans?.articles);
  const handleChange = async (event: SyntheticEvent, newValue: number | null) => {
    if (newValue !== null) {
      setValue(newValue);
    }
    try {
      if (!apiUrl) {
        toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
        return;
      }
      await axios.post(
        `${apiUrl}/notes`,
        {
          note: newValue?.toString(),
          artisan_id: id
          // client_id: user?.id?.toString()
        },
        configureAxiosHeaders(token ?? "")
      );
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.error || "Erreur lors de la recherche."
        : "Erreur inconnue lors de la recherche.";
      console.error("Erreur Axios:", errorMessage);
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (resultatUnSeulArtisans?.note?.length) {
      const latestNote = resultatUnSeulArtisans.note[resultatUnSeulArtisans.note.length - 1].note;
      setValue(latestNote as number);
    }
  }, [resultatUnSeulArtisans]);

  return (
    <Container maxWidth="lg" sx={{ my: 2, py: 3 }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h6">
                  {resultatUnSeulArtisans?.user?.nom} {resultatUnSeulArtisans?.user?.prenoms}
                </Typography>
              }
              sx={{ bgcolor: colorGrisPale }}
            />
            <CardContent sx={{ bgcolor: colorGrisPale }}>
              <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                <WorkIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {resultatUnSeulArtisans?.metier} : {resultatUnSeulArtisans?.description}
                </Typography>
              </Box>
              <ImageSwiper listImage={resultatUnSeulArtisans?.articles} artisanImage={true} />
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <TextRating valeur={value} handleChange={handleChange} />
                </Grid>
                {user?.role_id && (
                  <Grid item xs={12} md={6}>
                    <Button
                      component="a"
                      href={`https://wa.me/${resultatUnSeulArtisans?.user?.numero_telephone}`}
                      variant="contained"
                      color="primary"
                      startIcon={<WifiCalling3Icon />}
                      size="small"
                      disableRipple
                      fullWidth
                      aria-label="Appeler l'artisan"
                    >
                      {resultatUnSeulArtisans?.user?.numero_telephone}
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
