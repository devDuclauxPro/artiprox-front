import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material";
import { ImageSwiper } from "animations/imageSwiper";
import axios from "axios";
import { FC, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "reducerToolkitStore/store/store";
import { colorGrisPale } from "utils/color";
import { apiUrl } from "utils/config";
import { listImage } from "utils/listImage";
import { TextRating } from "../rechercherUnArtisan/textRating";

interface IArtisanProfil {
  adresse: string;
  description: string;
  email: string;
  id: number;
  id_artisan: number;
  metier: string;
  nom: string;
  numero_telephone: string;
  pays: string;
  prenoms: string;
  role_id: number;
  sexe: string;
  user_id: number;
  ville: string;
}

export const CardUnArtisan: FC = () => {
  const [value, setValue] = useState<number>(1);
  const { user, token } = useSelector((state: RootState) => state.user);
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IArtisanProfil | undefined>();

  const fetchDataArtisan = useCallback(async () => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }
    try {
      const response = await axios.post(
        `${apiUrl}/artisans/show`,
        { artisan_id: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );
      setData(response.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
      } else {
        console.error("Erreur inconnue:", error);
      }
    }
  }, [id, token]);

  const fetchData = useCallback(async () => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }
    try {
      await axios.get(`${apiUrl}/notations`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
      } else {
        console.error("Erreur inconnue:", error);
      }
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

      const response = await axios.post(
        `${apiUrl}/notations/create`,
        {
          note: newValue?.toString(),
          artisan_id: id?.toString(),
          client_id: user?.id.toString()
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
      );
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error);
        toast.error(error.response?.data?.error || "Erreur lors de la recherche.");
      } else {
        console.error("Erreur inconnue:", error);
        toast.error("Erreur inconnue lors de la recherche.");
      }
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
                  {data?.nom} {data?.prenoms}
                </Typography>
              }
              sx={{ bgcolor: colorGrisPale }} // Optionnel : ajouter une couleur de fond
            />
            <CardContent sx={{ bgcolor: colorGrisPale }}>
              <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                <WorkIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  Activités : {data?.description}
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
