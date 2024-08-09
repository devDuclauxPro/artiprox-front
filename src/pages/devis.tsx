import { Box } from "@mui/material";
import { Verifier } from "components/devis/verifier";
import { Layout } from "layouts/layout";
import { FC } from "react";

// Composant Devis qui rend la page Devis avec tous les sections
export const Devis: FC = () => {
  return (
    <Layout>
      <Box pt={8} mb={5}>
        <Verifier />
      </Box>
    </Layout>
  );
};
