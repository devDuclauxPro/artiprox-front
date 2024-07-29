import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { colorBleuFonce } from "utils/color";

export const InfoProfilCommun: FC = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      mb={2}
      textAlign="center" // Ajouté pour centrer le texte
    >
      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        devCommun@gmail.com
      </Typography>
      <Typography variant="body2" color={colorBleuFonce}>
        +2250707070707
      </Typography>
      <Typography variant="body2" color={colorBleuFonce}>
        Côte d'Ivoire
      </Typography>
      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        Abidjan, Cocody, Riviera golf
      </Typography>
      <Typography variant="body2" color={colorBleuFonce}>
        3 rendez-vous
      </Typography>
    </Box>
  );
};
