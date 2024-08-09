import { Revoir } from "components/devis/revoir";
import { FormAdresse } from "../devis/formAdresse";

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
