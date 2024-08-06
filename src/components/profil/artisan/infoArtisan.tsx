import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import userPhoto from "images/autres/user.png";
import { FC } from "react";
import { TInfoUserCommun } from "types/types";
import { colorGrisPale } from "utils/color";
import { BtnCommun } from "../commun/btnCommun";
import { InfoProfilCommunArtisan } from "./infoProfilCommunArtisan";

export const InfoArtisan: FC<TInfoUserCommun> = ({ nom, prenoms, photoUser }) => {
  return (
    <>
      <Typography variant="subtitle2" color="text.secondary">
        Profil artisan
      </Typography>
      <Typography variant="h5" gutterBottom>
        {nom} {prenoms}
      </Typography>
      <Grid container spacing={2} my={2}>
        <Grid
          item
          xs={12}
          sx={{ bgcolor: colorGrisPale, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box component="img" sx={{ height: 150, width: 150 }} alt={nom} src={photoUser ? photoUser : userPhoto} />
        </Grid>
      </Grid>
      <InfoProfilCommunArtisan />
      <BtnCommun />
    </>
  );
};
