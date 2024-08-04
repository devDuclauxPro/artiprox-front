import { Autocomplete, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { LoadingIndicator } from "animations/threeDots";
import axios from "axios";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setTrouverArtisan } from "reducerToolkitStore/features/trouverArtisan";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue, colorGris2 } from "utils/color";
import { apiUrl } from "utils/config";
import { metiers, villes } from "utils/recherche";
import { DescriptionArtisan } from "./descriptionArtisan";
import { ResultatArtisan } from "./resultatArtisan";

type Inputs = {
  metier: string;
  ville: string;
};

export const HautRecherche: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (!apiUrl) {
        toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
        return;
      }

      setLoading(true);
      const response = await axios.post(`${apiUrl}/search-artisan`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      dispatch(
        setTrouverArtisan({
          resultatArtisans: response.data.data,
          rechercheArtisan: data
        })
      );
      console.log(response.data.data);
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
