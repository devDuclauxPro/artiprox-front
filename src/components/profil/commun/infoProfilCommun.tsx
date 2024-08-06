import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBleuFonce } from "utils/color";

// Fonction utilitaire pour obtenir une valeur avec un message par défaut
const getValueOrDefault = (value: string | undefined, defaultMessage: string) => {
  return value || defaultMessage;
};

export const InfoProfilCommun: FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

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
      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {getValueOrDefault(user?.metier, "Le métier n'a pas encore été renseigné")}
      </Typography>

      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {getValueOrDefault(user?.sexe, "Le sexe n'a pas encore été renseigné")}
      </Typography>

      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {getValueOrDefault(user?.email, "L'email n'a pas encore été renseigné")}
      </Typography>

      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {getValueOrDefault(user?.numero_telephone, "Le numéro de téléphone n'a pas encore été renseigné")}
      </Typography>

      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {getValueOrDefault(user?.pays, "Le pays n'a pas encore été renseigné")}
      </Typography>

      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {getValueOrDefault(user?.ville, "La ville n'a pas encore été renseignée")}
      </Typography>

      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {getValueOrDefault(user?.adresse, "L'adresse n'a pas encore été renseignée")}
      </Typography>

      <Typography variant="body2" color={colorBleuFonce}>
        3 rendez-vous
      </Typography>
    </Box>
  );
};
