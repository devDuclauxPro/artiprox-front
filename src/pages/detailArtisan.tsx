import { AfficherProfilArtisan } from "components/artisan/afficherUnArtisan/afficherProfilArtisan";
import { Layout } from "layouts/layout";
import { FC } from "react";

export const DetailArtisan: FC = () => {
  return (
    <Layout>
      <AfficherProfilArtisan />
    </Layout>
  );
};
