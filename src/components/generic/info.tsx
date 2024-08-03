import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InfoProfilCommun } from "components/profil/commun/infoProfilCommun";
import userPhoto from "images/autres/user.png";
import { FC } from "react";
import { TInfoUserCommun } from "types/types";
import { colorGrisPale } from "utils/color";

type TInfoDescription = {
  description?: string;
  colorDescroption?: string;
};
type TInfoGeneric = TInfoUserCommun & TInfoDescription;

export const Info: FC<TInfoGeneric> = ({ nom, prenoms, photoUser, description, colorDescroption }) => {
  return (
    <>
      <Typography variant="subtitle2" color="text.secondary">
        Mon profil
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
      <InfoProfilCommun />
      <Box display="flex" justifyContent="center" gap={1} textAlign="center" width="100%">
        <Typography color={colorDescroption}>{description}</Typography>
      </Box>
    </>
  );
};
