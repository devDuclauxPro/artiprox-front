import { FormAdresse } from "./formAdresse";
import { Revoir } from "./revoir";

export const steps = ["Information", "Récapitulatif"];

export const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <FormAdresse />;
    case 1:
      return <Revoir />;
    default:
      throw new Error("Unknown step");
  }
};
