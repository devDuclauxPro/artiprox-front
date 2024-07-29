import { AfficherProfilArtisan } from "components/artisan/afficherUnArtisan/afficherProfilArtisan";
import { FC } from "react";

// Exemple de données artisan pour démonstration
const artisanData = {
  nomUser: "Kpan Emmanuel",
  description: "Consultez les informations détaillées de votre artisan"
};

export const AffichierUnArtisan: FC = () => {
  return <AfficherProfilArtisan nomUser={artisanData.nomUser} description={artisanData.description} />;
};
