import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBleuFonce } from "utils/color";

export const InfoProfilCommunArtisan: FC = () => {
  const { resultatUnSeulArtisans } = useSelector((state: RootState) => state.trouverArtisan);
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
        {resultatUnSeulArtisans?.metier || "Le metier n'a pas encore été renseigné"}
      </Typography>
      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {resultatUnSeulArtisans?.user?.sexe || "Le sexe n'a pas encore été renseigné"}
      </Typography>
      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {resultatUnSeulArtisans?.user?.email || "L'email' n'a pas encore été renseigné"}
      </Typography>
      <Typography variant="body2" color={colorBleuFonce}>
        {resultatUnSeulArtisans?.user?.numero_telephone || "Le n° tel n'a pas encore été renseigné"}
      </Typography>
      <Typography variant="body2" color={colorBleuFonce}>
        {resultatUnSeulArtisans?.user?.pays || "Le pays n'a pas encore été renseigné"}
      </Typography>
      <Typography variant="body2" color={colorBleuFonce}>
        {resultatUnSeulArtisans?.user?.ville || "La ville n'a pas encore été renseignée"}
      </Typography>
      <Typography gutterBottom variant="body2" color={colorBleuFonce}>
        {resultatUnSeulArtisans?.user?.adresse || "L'adresse n'a pas encore été renseignée"}
      </Typography>
      <Typography variant="body2" color={colorBleuFonce}>
        3 rendez-vous
      </Typography>
    </Box>
  );
};
