import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { getStepContent, steps } from "./getStepContent";
import { Info } from "./info";
import { InfoMobile } from "./infoMobile";
import { PasApas } from "./pasApas";

export const Verifier: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
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
          gap: 4
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, width: "100%", maxWidth: 500 }}>
          <Info nomArtisan={"Kpan Emmanuel grand"} />
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
          gap: { xs: 4, md: 8 }
        }}
      >
        <PasApas activeStep={activeStep} />
        <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
          <CardContent
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              ":last-child": { pb: 2 }
            }}
          >
            <div>
              <Typography variant="subtitle2" gutterBottom>
                Artisan sélectionné
              </Typography>
              <Typography variant="body1">{"Kpan Emmanuel mobile"}</Typography>
            </div>
            <InfoMobile nomArtisan={"Kpan Emmanuel mobile"} />
          </CardContent>
        </Card>
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
            <Stack spacing={2} useFlexGap py={5}>
              <Typography variant="h1">📦</Typography>
              <Typography variant="h5">Nous vous remercions d'avoir demandé un devis !</Typography>
              <Typography variant="body1" color="text.secondary">
                Votre numéro de devis est le <strong>&nbsp;#140396</strong>. Nous avons le plaisir de vous transmettre
                par email le fichier contenant le devis que vous avez sollicité.
              </Typography>
              <Button
                component={Link}
                to="/trouver-un-artisan"
                variant="contained"
                sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
              >
                Trouver un autre artisan
              </Button>
            </Stack>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  justifyContent: activeStep !== 0 ? "space-between" : "flex-end",
                  alignItems: "end",
                  flexGrow: 1,
                  gap: 1
                }}
              >
                {activeStep !== 0 && (
                  <Button
                    startIcon={<ChevronLeftRoundedIcon />}
                    onClick={handleBack}
                    variant="text"
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    Précédent
                  </Button>
                )}
                {activeStep !== 0 && (
                  <Button
                    startIcon={<ChevronLeftRoundedIcon />}
                    onClick={handleBack}
                    variant="outlined"
                    fullWidth
                    sx={{ display: { xs: "flex", sm: "none" } }}
                  >
                    Précédent
                  </Button>
                )}
                <Button
                  variant="contained"
                  endIcon={<ChevronRightRoundedIcon />}
                  onClick={handleNext}
                  sx={{ width: { xs: "100%", sm: "fit-content" } }}
                >
                  {activeStep === steps.length - 1 ? "Envoyé" : "Suivant"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
