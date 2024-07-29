import { useState } from "react";

export const steps = ["Information", "Récapitulatif"];

export const useStep = (initialStep = 0) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return { activeStep, handleNext, handleBack };
};
