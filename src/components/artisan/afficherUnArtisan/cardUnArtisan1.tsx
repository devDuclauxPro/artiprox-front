import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";
import { ImageSwiper } from "animations/imageSwiper";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IArtisan } from "reducerToolkitStore/features/trouverArtisan";
import { RootState } from "reducerToolkitStore/store/store";
import { colorGrisPale } from "utils/color";
import { apiUrl } from "utils/config";
import { listImage } from "utils/listImage";
import { TextRating } from "../rechercherUnArtisan/textRating";

export const CardUnArtisan: FC = () => {
  const [value, setValue] = useState<number>(1);
  const { user, token } = useSelector((state: RootState) => state.user);
  const { resultatArtisans } = useSelector((state: RootState) => state.trouverArtisan);
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IArtisan | undefined>(undefined);

  const fetchData = useCallback(() => {
    if (!id || !resultatArtisans) {
      toast.error("ID manquant ou artisans non chargés");
      return;
    }

    const artisan = resultatArtisans.find((resultat) => resultat.id === parseInt(id));
    if (!artisan) {
      toast.error(`Aucun artisan trouvé avec l'ID: ${id}`);
      return;
    }

    setData(artisan);

    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
    }
  }, [id, resultatArtisans]);

  const handleChange = async (event: SyntheticEvent, newValue: number | null) => {
    if (newValue === null) return;

    setValue(newValue);

    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      await axios.post(
        `${apiUrl}/notations/create`,
        {
          note: newValue.toString(),
          artisan_id: id ?? "",
          client_id: user?.id.toString() ?? ""
        },
        configureAxiosHeaders(token ?? "")
      );
    } catch (error) {
      const errorMessage = axios.isAxiosError(error) ? error.response?.data?.error : "Erreur inconnue";
      console.error("Erreur Axios:", errorMessage);
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container maxWidth="lg" sx={{ my: 2, py: 3 }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h6">
                  {data?.nom} {data?.prenoms}
                </Typography>
              }
              sx={{ bgcolor: colorGrisPale }}
            />
            <CardContent sx={{ bgcolor: colorGrisPale }}>
              <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                <WorkIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2">Activités : {data?.description}</Typography>
              </Box>
              <ImageSwiper listImage={listImage} />
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sx={{ display: { xs: "flex", lg: "block" }, justifyContent: "center", alignItems: "center" }}
                >
                  <TextRating valeur={value} handleChange={handleChange} />
                </Grid>
                {user?.role_id && (
                  <Grid item xs={12} lg={3}>
                    <Button
                      component="a"
                      href={`https://wa.me/${data?.numero_telephone}`}
                      variant="contained"
                      color="primary"
                      startIcon={<WifiCalling3Icon />}
                      size="small"
                      disableRipple
                      fullWidth
                      aria-label="Appeler l'artisan"
                    >
                      {data?.numero_telephone}
                    </Button>
                  </Grid>
                )}
                <Grid item xs={12} md={6} lg={3}>
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
                <Grid item xs={12} md={6} lg={3}>
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
