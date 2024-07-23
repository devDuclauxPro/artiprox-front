import { AddressForm } from "components/devis/addressForm";
import { PaymentForm } from "components/devis/paymentForm";
import { Review } from "components/devis/review";

export const steps = ["Shipping address", "Payment details", "Review your order"];

export const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
};
