import { HautRecherche } from "components/artisan/rechercherUnArtisan/hautRecherche";
import { ResultatArtisan } from "components/artisan/rechercherUnArtisan/resultatArtisan";
import { Layout } from "layouts/layout";
import { FC } from "react";

export const Artisan: FC = () => {
  return (
    <Layout>
      <HautRecherche />
      <ResultatArtisan />
    </Layout>
  );
};
