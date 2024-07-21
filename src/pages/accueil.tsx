import { HautAccueil } from "components/accueil/hautAccueil";
import { MilieuDescriptionAccueil } from "components/accueil/milieuDescriptionAccueil";
import { MilieuDescriptionPetitEcran } from "components/accueil/milieuDescriptionPetitEcran";
import { MilieuNosArtisan } from "components/accueil/milieuNosArtisan";
import { MilieuPourquoiAccueil } from "components/accueil/milieuPouquoiAccueil";
import { Layout } from "layouts/layout";
import { FC } from "react";

// Composant Accueil qui rend la page d'accueil avec tous les sections
export const Accueil: FC = () => {
  return (
    <Layout>
      {/* Section du haut de la page d'accueil */}
      <HautAccueil />
      {/* Description générale pour les grands écrans */}
      <MilieuDescriptionAccueil />
      {/* Description spécifique pour les petits écrans */}
      <MilieuDescriptionPetitEcran />
      {/* Section expliquant pourquoi faire appel aux services */}
      <MilieuPourquoiAccueil />
      {/* Section présentant les artisans */}
      <MilieuNosArtisan />
    </Layout>
  );
};
