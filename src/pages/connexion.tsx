import { FormConnexion } from "components/connexion/formConnexion";
import { Layout } from "layouts/layout";
import { FC } from "react";

// Composant Connexion qui rend la page Connexion avec tous les sections
export const Connexion: FC = () => {
  return (
    <Layout>
      <FormConnexion />
    </Layout>
  );
};
