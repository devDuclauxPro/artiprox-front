import { AffichierUnArtisan } from "components/profil/artisan/affichierUnArtisan";
import { Layout } from "layouts/layout";
import { FC } from "react";

export const DetailArtisan: FC = () => {
  return (
    <Layout>
      <AffichierUnArtisan />
    </Layout>
  );
};
