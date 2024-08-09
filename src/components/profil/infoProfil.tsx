import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { colorBleuFonce } from "utils/color";

interface InfoItem {
  label: string;
  value: string | undefined;
}

interface InfoProfilProps {
  infoList: InfoItem[];
}

// Fonction utilitaire pour obtenir une valeur avec un message par défaut
const getValueOrDefault = (value: string | undefined, defaultMessage: string) => {
  return value || defaultMessage;
};

// Composant générique pour afficher les informations de profil
export const InfoProfil: FC<InfoProfilProps> = ({ infoList }) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      mb={2}
      textAlign="center"
    >
      {infoList.map((info, index) => (
        <Typography key={index} gutterBottom variant="body2" color={colorBleuFonce}>
          {getValueOrDefault(info.value, info.label)}
        </Typography>
      ))}
    </Box>
  );
};
