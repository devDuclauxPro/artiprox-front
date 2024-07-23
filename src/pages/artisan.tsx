import { HautRecherche } from "components/artisan/hautRecherche";
import { ResultatArtisan } from "components/artisan/resultatArtisan";
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
