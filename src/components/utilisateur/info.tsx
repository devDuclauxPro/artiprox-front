import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import client from "images/autres/user.png";
import { FC } from "react";
import { TInfoProps } from "types/types";
import { colorGrisPale } from "utils/color";
import { InfoProfil } from "./infoProfil";

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
      <Box display="flex" flexDirection="column" justifyContent="center" gap={1}>
        <Button variant="contained" color="success">
          Modifier son profil
        </Button>
        <Button variant="contained">Modifier son mot de passe</Button>
      </Box>
    </>
  );
};
