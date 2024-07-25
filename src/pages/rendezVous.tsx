import { Box } from "@mui/material";
import { Verifier } from "components/rendezVous/verifier";
import { Layout } from "layouts/layout";
import { FC } from "react";

export const RendezVous: FC = () => {
  return (
    <Layout>
      <Box pt={8} mb={5}>
        <Verifier />
      </Box>
    </Layout>
  );
};
