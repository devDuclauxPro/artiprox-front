import { configureAxiosHeaders } from "App";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "reducerToolkitStore/store/store";
import { apiUrl } from "./config";

export const steps = ["Information", "Récapitulatif"];

export const useStep = (initialStep = 0) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const { user, token } = useSelector((state: RootState) => state.user);
  const { resultatUnSeulArtisans } = useSelector((state: RootState) => state.trouverArtisan);

  const handleSubmit = async () => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/devis`,
        { artisan_id: resultatUnSeulArtisans?.id_artisan, user_id: user?.id, file: "" },
        configureAxiosHeaders(token ?? "")
      );

      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
      } else {
        console.error("Erreur inconnue:", error);
      }
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    activeStep === 1 && handleSubmit();
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return { activeStep, handleNext, handleBack };
};
