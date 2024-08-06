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

interface INewArtisan extends IArtisan {
  metier?: string;
  user?: IArtisan;
}

export const CardUnArtisan: FC = () => {
  const [value, setValue] = useState<number>(1);
  const { user, token } = useSelector((state: RootState) => state.user);
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<INewArtisan | undefined>();

  const fetchDataArtisan = useCallback(async () => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }
    try {
      const response = await axios.post(
        `${apiUrl}/artisans/show`,
        { artisan_id: id },
        configureAxiosHeaders(token ?? "")
      );
      setData(response.data.data);
    } catch (error) {
      const errorMessage = axios.isAxiosError(error) ? error.response?.data?.error || error.message : "Erreur inconnue";
      console.error("Erreur Axios:", errorMessage);
    }
  }, [id, token]);

  const fetchData = useCallback(async () => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }
    try {
      await axios.get(`${apiUrl}/notations`, configureAxiosHeaders(token ?? ""));
    } catch (error) {
      const errorMessage = axios.isAxiosError(error) ? error.response?.data?.error || error.message : "Erreur inconnue";
      console.error("Erreur Axios:", errorMessage);
    }
  }, [token]);

  useEffect(() => {
    fetchDataArtisan();
    fetchData();
  }, [fetchData, fetchDataArtisan]);

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
        `${apiUrl}/notations/create`,
        {
          note: newValue?.toString(),
          artisan_id: id?.toString(),
          client_id: user?.id.toString()
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

  return (
    <Container maxWidth="lg" sx={{ my: 2, py: 3 }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h6">
                  {data?.user?.nom} {data?.user?.prenoms}
                </Typography>
              }
              sx={{ bgcolor: colorGrisPale }}
            />
            <CardContent sx={{ bgcolor: colorGrisPale }}>
              <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                <WorkIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {data?.metier} : {data?.description}
                </Typography>
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
                      href={`https://wa.me/${data?.user?.numero_telephone}`}
                      variant="contained"
                      color="primary"
                      startIcon={<WifiCalling3Icon />}
                      size="small"
                      disableRipple
                      fullWidth
                      aria-label="Appeler l'artisan"
                    >
                      {data?.user?.numero_telephone}
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
