import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { steps } from "./getStepContent";

type TStepperComponentProps = {
  activeStep: number;
};

export const PasApas = ({ activeStep }: TStepperComponentProps) => (
  <Stepper activeStep={activeStep} sx={{ width: "100%", height: 40 }}>
    {steps.map((label) => (
      <Step key={label} sx={{ ":first-child": { pl: 0 }, ":last-child": { pr: 0 } }}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
);
