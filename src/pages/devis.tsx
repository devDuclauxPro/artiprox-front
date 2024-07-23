import { Box } from "@mui/material";
import { Checkout } from "components/devis/checkout";
import { Layout } from "layouts/layout";
import { FC } from "react";

export const Devis: FC = () => {
  return (
    <Layout>
      <Box pt={8}>
        <Checkout />
      </Box>
    </Layout>
  );
};
