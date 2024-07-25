import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InfoProfil } from "components/utilisateur/infoProfil";
import client from "images/autres/user.png";
import { FC } from "react";
import { TInfoProps } from "types/types";
import { colorBlue, colorGrisPale } from "utils/color";

export const Info: FC<TInfoProps> = ({ nomArtisan, photoArtisan }) => {
  return (
    <>
      <Typography variant="subtitle2" color="text.secondary">
        Mon profil
      </Typography>
      <Typography variant="h5" gutterBottom>
        {nomArtisan}
      </Typography>
      <Grid container spacing={2} my={2}>
        <Grid
          item
          xs={12}
          sx={{ bgcolor: colorGrisPale, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            component="img"
            sx={{ height: 150, width: 150 }}
            alt={nomArtisan}
            src={photoArtisan ? photoArtisan : client}
          />
        </Grid>
      </Grid>
      <InfoProfil />
      <Typography textAlign="center" variant="button" color={colorBlue}>
        Mon historique
      </Typography>
    </>
  );
};
