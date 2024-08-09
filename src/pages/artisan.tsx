import { HautRecherche } from "components/artisan/rechercherUnArtisan/hautRecherche";
import { Layout } from "layouts/layout";
import { FC } from "react";

// Composant Artisan qui rend la page d'Artisan avec tous les sections
export const Artisan: FC = () => {
  return (
    <Layout>
      <HautRecherche />
    </Layout>
  );
};
