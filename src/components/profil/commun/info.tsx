import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import userPhoto from "images/autres/user.png";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deconnexion } from "reducerToolkitStore/features/user";
import { TInfoUserCommun } from "types/types";
import { colorGrisPale } from "utils/color";
import { InfoProfilCommun } from "./infoProfilCommun";

export const Info: FC<TInfoUserCommun> = ({ nomUser, photoUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeconnexion = () => {
    dispatch(deconnexion());
    navigate("/connexion");
  };

  return (
    <>
      <Typography variant="subtitle2" color="text.secondary">
        Mon profil
      </Typography>
      <Typography variant="h5" gutterBottom>
        {nomUser}
      </Typography>
      <Grid container spacing={2} my={2}>
        <Grid
          item
          xs={12}
          sx={{ bgcolor: colorGrisPale, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box component="img" sx={{ height: 150, width: 150 }} alt={nomUser} src={photoUser ? photoUser : userPhoto} />
        </Grid>
      </Grid>
      <InfoProfilCommun />
      <Box display="flex" flexDirection="column" justifyContent="center" gap={1}>
        <Button variant="contained" color="success">
          Modifier mon profil
        </Button>
        <Button variant="contained">Modifier mon mot de passe</Button>
        <Button variant="contained">Mon historique</Button>
        <Button variant="contained">Ajouter des articles</Button>
        <Button variant="contained">Voir les utilisateurs</Button>
        <Button variant="contained" color="error" onClick={handleDeconnexion}>
          Se déconnecter
        </Button>
      </Box>
    </>
  );
};
