import { Box, Grid, Stack, Typography } from "@mui/material";
import { LoadingIndicator } from "animations/threeDots";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { Info } from "components/generic/info";
import { InfoMobile } from "components/generic/infoMobile";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IArtisan, setTrouverArtisan } from "reducerToolkitStore/features/trouverArtisan";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue } from "utils/color";
import { apiUrl } from "utils/config";
import { CardUnArtisan } from "./cardUnArtisan";

interface INewArtisan extends IArtisan {
  metier?: string;
  user?: IArtisan;
}

export const AfficherProfilArtisan: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<INewArtisan | undefined>();

  const fetchDataArtisan = useCallback(async () => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `${apiUrl}/artisans/show`,
        { artisan_id: id },
        configureAxiosHeaders(token ?? "")
      );
      const fetchedData = response.data.data;
      setData(fetchedData);
      dispatch(setTrouverArtisan({ resultatUnSeulArtisans: fetchedData }));
    } catch (error) {
      const errorMessage = axios.isAxiosError(error) ? error.response?.data?.error || error.message : "Erreur inconnue";
      console.error("Erreur Axios:", errorMessage);
    } finally {
      setLoading(false);
    }
  }, [id, token, dispatch]);

  useEffect(() => {
    fetchDataArtisan();
  }, [fetchDataArtisan]);

  return (
    <Box minHeight="80vh">
      {loading ? (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={10}>
          <LoadingIndicator />
          <Typography variant="caption" component="h1" color={colorBlue}>
            Veuillez patienter quelques secondes...
          </Typography>
        </Box>
      ) : (
        <Grid container>
          <Grid
            item
            xs={12}
            sm={5}
            lg={4}
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              backgroundColor: "background.paper",
              borderRight: { sm: "none", md: "1px solid" },
              borderColor: { sm: "none", md: "divider" },
              alignItems: "start",
              pt: 4,
              px: 10,
              gap: 4,
              mt: 5
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, width: "100%", maxWidth: 500 }}>
              <Info
                nom={data?.user?.nom || ""}
                prenoms={data?.user?.prenoms || ""}
                description={`Consultez les informations détaillées de ${data?.user?.nom || ""} ${data?.user?.prenoms || ""}`}
              />
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={7}
            lg={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
              width: "100%",
              backgroundColor: { xs: "transparent", sm: "background.default" },
              alignItems: "start",
              pt: { xs: 2, sm: 4 },
              px: { xs: 2, sm: 10 },
              gap: { xs: 4, md: 8 },
              mt: 5
            }}
          >
            <InfoMobile
              nom={data?.user?.nom || ""}
              prenoms={data?.user?.prenoms || ""}
              description={`Consultez les informations détaillées de ${data?.user?.nom || ""} ${data?.user?.prenoms || ""}`}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%",
                gap: { xs: 5, md: 0 }
              }}
            >
              <Stack spacing={2} useFlexGap>
                <CardUnArtisan />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
