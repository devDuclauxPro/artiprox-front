import { AfficherProfilArtisan } from "components/artisan/afficherUnArtisan/afficherProfilArtisan";
import { Layout } from "layouts/layout";
import { FC } from "react";

// Composant DetailArtisan qui rend la page DetailArtisan avec tous les sections
export const DetailArtisan: FC = () => {
  return (
    <Layout>
      <AfficherProfilArtisan />
    </Layout>
  );
};
