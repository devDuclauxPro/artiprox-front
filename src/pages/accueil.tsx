import { HautAccueil } from "components/accueil/hautAccueil";
import { MilieuDescriptionAccueil } from "components/accueil/milieuDescriptionAccueil";
import { MilieuDescriptionPetitEcran } from "components/accueil/milieuDescriptionPetitEcran";
import { MilieuNosArtisan } from "components/accueil/milieuNosArtisan";
import { MilieuPourquoiAccueil } from "components/accueil/milieuPouquoiAccueil";
import logo from "images/barre/logo.jpeg";
import { Layout } from "layouts/layout";
import { FC } from "react";
import { colorBleuFonce, colorGris } from "utils/color";
import { iconItems } from "utils/data";

// Composant Accueil qui rend la page d'accueil avec tous les sections
export const Accueil: FC = () => {
  return (
    <Layout>
      {/* Section du haut de la page d'accueil */}
      <HautAccueil />
      {/* Description générale pour les grands écrans */}
      <MilieuDescriptionAccueil items={iconItems} backgroundColor={colorGris} textColor="black" />
      {/* Description spécifique pour les petits écrans */}
      <MilieuDescriptionPetitEcran
        logoSrc={logo}
        altText="logo du site"
        description="ArtiProx | les artisans près de chez moi"
        textColor={colorBleuFonce}
        backgroundColor="#f0f0f0" // Couleur de fond personnalisée
      />
      {/* Section expliquant pourquoi faire appel aux services */}
      <MilieuPourquoiAccueil />
      {/* Section présentant les artisans */}
      <MilieuNosArtisan />
    </Layout>
  );
};
