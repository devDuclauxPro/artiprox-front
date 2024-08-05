import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { colorWhite } from "utils/color";

export const FooterCopyRight: FC = () => {
  return (
    <Box paddingY={1} display="flex" justifyContent="center" alignItems="center">
      <Typography variant="subtitle2" component="p" color={colorWhite}>
        &copy; 2024 Arti-prox. Tous droits réservés.
      </Typography>
    </Box>
  );
};
