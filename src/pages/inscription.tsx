import { FormInscription } from "components/inscription/formInscription";
import { Layout } from "layouts/layout";
import { FC } from "react";

// Composant Inscription qui rend la page Inscription avec tous les sections
export const Inscription: FC = () => {
  return (
    <Layout>
      <FormInscription />
    </Layout>
  );
};
