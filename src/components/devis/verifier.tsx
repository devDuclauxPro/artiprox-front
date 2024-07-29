import { Box, Grid } from "@mui/material";
import { PasApas } from "components/devisRdvCommun/pasApas";
import { StepNavigation } from "components/devisRdvCommun/stepNavigation";
import { Info } from "components/generic/info";
import { InfoMobile } from "components/generic/infoMobile";
import { FC } from "react";
import { steps, useStep } from "../../utils/useStep";
import { FinalStep } from "../devisRdvCommun/finalStep";
import { getStepContent } from "./getStepContent";

export const Verifier: FC = () => {
  const { activeStep, handleNext, handleBack } = useStep();

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
        <Info nomUser="Kpan Emmanuel grand" description="Demandez un devis à l'artisan" />
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
        <InfoMobile nomUser="Kpan Emmanuel mobile" description="Demandez un devis à l'artisan" />
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
      </Grid>
    </Grid>
  );
};
