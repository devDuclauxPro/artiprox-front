import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface StepNavigationProps {
  activeStep: number;
  stepsLength: number;
  handleNext: () => void;
  handleBack: () => void;
}

export const StepNavigation: FC<StepNavigationProps> = ({ activeStep, stepsLength, handleNext, handleBack }) => (
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
      <>
        <Button
          startIcon={<ChevronLeftRoundedIcon />}
          onClick={handleBack}
          variant="text"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          Précédent
        </Button>
        <Button
          startIcon={<ChevronLeftRoundedIcon />}
          onClick={handleBack}
          variant="outlined"
          fullWidth
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          Précédent
        </Button>
      </>
    )}
    <Button
      variant="contained"
      endIcon={<ChevronRightRoundedIcon />}
      onClick={handleNext}
      sx={{ width: { xs: "100%", sm: "fit-content" } }}
    >
      {activeStep === stepsLength - 1 ? "Envoyé" : "Suivant"}
    </Button>
  </Box>
);
