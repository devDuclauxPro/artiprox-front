import { Box } from "@mui/material";
import { AfficherProfilCommun } from "components/profil/commun/afficherProfilCommun";
import { Layout } from "layouts/layout";
import { FC } from "react";

export const Utilisateur: FC = () => {
  return (
    <Layout>
      <Box pt={8} mb={5}>
        <AfficherProfilCommun />
      </Box>
    </Layout>
  );
};
