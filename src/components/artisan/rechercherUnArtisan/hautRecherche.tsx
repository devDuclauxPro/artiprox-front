import { Autocomplete, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { LoadingIndicator } from "animations/threeDots";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC, useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IRechArtisan, setTrouverArtisan } from "reducerToolkitStore/features/trouverArtisan";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue, colorGris2 } from "utils/color";
import { apiUrl } from "utils/config";
import { metiers, villes } from "utils/recherche";
import { DescriptionArtisan } from "./descriptionArtisan";
import { ResultatArtisan } from "./resultatArtisan";

export const HautRecherche: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<IRechArtisan>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  // Fonction pour récupérer les données des artisans par défaut
  const fetchDataArtisan = useCallback(async () => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }
    try {
      const response = await axios.post(
        `${apiUrl}/search-artisan`,
        { metier: "", ville: "" },
        configureAxiosHeaders(token ?? "")
      );

      dispatch(
        setTrouverArtisan({
          resultatArtisans: response.data.data,
          rechercheArtisan: { metier: "", ville: "" }
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
      } else {
        console.error("Erreur inconnue:", error);
      }
    }
  }, [dispatch, token]);

  // Utiliser useEffect pour récupérer les données des artisans au montage du composant
  useEffect(() => {
    fetchDataArtisan();
  }, [fetchDataArtisan]);

  // Fonction pour gérer la soumission du formulaire
  const onSubmit: SubmitHandler<IRechArtisan> = async (data) => {
    try {
      if (!apiUrl) {
        toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
        return;
      }

      setLoading(true);
      const response = await axios.post(`${apiUrl}/search-artisan`, data, configureAxiosHeaders(token ?? ""));

      dispatch(
        setTrouverArtisan({
          resultatArtisans: response.data.data,
          rechercheArtisan: data
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error);
        toast.error(error.response?.data?.error || "Erreur lors de la recherche.");
      } else {
        console.error("Erreur inconnue:", error);
        toast.error("Erreur inconnue lors de la recherche.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" mt={8} minHeight="100vh">
      <Box bgcolor={colorGris2} py={8}>
        <Container maxWidth="lg">
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3}>
                <Typography color={colorBlue} variant="h6" textAlign={{ xs: "left", sm: "center", md: "right" }}>
                  Trouver un artisan
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                  disablePortal
                  id="metier-box"
                  options={metiers}
                  size="small"
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} {...register("metier")} label="Sélectionner un métier" />
                  )}
                  aria-label="Sélectionner un métier"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                  disablePortal
                  id="ville-box"
                  options={villes}
                  size="small"
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} {...register("ville")} label="Sélectionner une ville" />
                  )}
                  aria-label="Sélectionner une ville"
                />
              </Grid>
              <Grid item xs={12} md={3} display="flex" justifyContent={{ xs: "center", md: "left" }}>
                <Button type="submit" variant="contained" size="small" fullWidth color="success" disableRipple>
                  Trouver !
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {loading ? (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <LoadingIndicator />
          <Typography variant="caption" component="h1" color={colorBlue}>
            Veuillez patienter quelques secondes...
          </Typography>
        </Box>
      ) : (
        <>
          <DescriptionArtisan />
          <ResultatArtisan />
        </>
      )}
    </Box>
  );
};
