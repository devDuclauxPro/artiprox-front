import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StepperComponent } from "components/devis/stepperComponent";
import { useState } from "react";
import { getStepContent, steps } from "utils/devis";
import { Info } from "./info";
import { InfoMobile } from "./infoMobile";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { BackHeader } from "components/devis/backHeader";

export const Checkout = () => {
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
        <BackHeader />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, width: "100%", maxWidth: 500 }}>
          <Info totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"} />
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
        <StepperComponent activeStep={activeStep} />
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
                Selected products
              </Typography>
              <Typography variant="body1">{activeStep >= 2 ? "$144.97" : "$134.98"}</Typography>
            </div>
            <InfoMobile totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"} />
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
          <StepperComponent activeStep={activeStep} />
          {activeStep === steps.length ? (
            <Stack spacing={2} useFlexGap>
              <Typography variant="h1">📦</Typography>
              <Typography variant="h5">Thank you for your order!</Typography>
              <Typography variant="body1" color="text.secondary">
                Your order number is<strong>&nbsp;#140396</strong>. We have emailed your order confirmation and will
                update you once it is shipped.
              </Typography>
              <Button variant="contained" sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}>
                Go to my orders
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
                  gap: 1,
                  pb: { xs: 12, sm: 0 },
                  mt: { xs: 2, sm: 0 },
                  mb: "60px"
                }}
              >
                {activeStep !== 0 && (
                  <Button
                    startIcon={<ChevronLeftRoundedIcon />}
                    onClick={handleBack}
                    variant="text"
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    Previous
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
                    Previous
                  </Button>
                )}
                <Button
                  variant="contained"
                  endIcon={<ChevronRightRoundedIcon />}
                  onClick={handleNext}
                  sx={{ width: { xs: "100%", sm: "fit-content" } }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
