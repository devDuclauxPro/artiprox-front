import { Box, Grid, Typography } from "@mui/material";
import { LoadingIndicator } from "animations/threeDots";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { PasApas } from "components/devisRdvCommun/pasApas";
import { StepNavigation } from "components/devisRdvCommun/stepNavigation";
import { Info } from "components/generic/info";
import { InfoMobile } from "components/generic/infoMobile";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setTrouverArtisan } from "reducerToolkitStore/features/trouverArtisan";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue } from "utils/color";
import { apiUrl } from "utils/config";
import { steps, useStep } from "../../utils/useStep";
import { FinalStep } from "../devisRdvCommun/finalStep";
import { getStepContent } from "./getStepContent";

export const Verifier: FC = () => {
  const { activeStep, handleNext, handleBack } = useStep();
  const { resultatUnSeulArtisans } = useSelector((state: RootState) => state.trouverArtisan);
  const { token } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

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
    <Grid container>
      {loading ? (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={10}>
          <LoadingIndicator />
          <Typography variant="caption" component="h1" color={colorBlue}>
            Veuillez patienter quelques secondes...
          </Typography>
        </Box>
      ) : (
        <>
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
              gap: 4
            }}
          >
            <Info
              nom={resultatUnSeulArtisans?.user?.nom as string}
              prenoms={resultatUnSeulArtisans?.user?.prenoms as string}
              description="Demandez un devis à l'artisan"
            />
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
              gap: { xs: 4, md: 8 }
            }}
          >
            <PasApas activeStep={activeStep} />
            <InfoMobile
              nom={resultatUnSeulArtisans?.user?.prenoms as string}
              prenoms={resultatUnSeulArtisans?.user?.prenoms as string}
              description="Demandez un devis à l'artisan"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%",
                maxWidth: { sm: "100%", md: 600 },
                maxHeight: "720px",
                gap: { xs: 5, md: "none" }
              }}
            >
              {activeStep === steps.length ? (
                <FinalStep />
              ) : (
                <>
                  {getStepContent(activeStep)}
                  <StepNavigation
                    activeStep={activeStep}
                    stepsLength={steps.length}
                    handleNext={handleNext}
                    handleBack={handleBack}
                  />
                </>
              )}
            </Box>
          </Grid>{" "}
        </>
      )}
    </Grid>
  );
};
