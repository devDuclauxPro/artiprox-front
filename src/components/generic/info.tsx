import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InfoProfilCommunArtisan } from "components/profil/artisan/infoProfilCommunArtisan";
import userPhoto from "images/autres/user.png";
import { FC } from "react";
import { TInfoUserCommun } from "types/types";
import { colorGrisPale } from "utils/color";

type TInfoDescription = {
  description?: string;
  colorDescription?: string; // Corrigé la faute de frappe ici
};

type TInfoGeneric = TInfoUserCommun & TInfoDescription;

export const Info: FC<TInfoGeneric> = ({
  nom,
  prenoms,
  photoUser,
  description = "",
  colorDescription = "text.primary"
}) => {
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
          <Box
            component="img"
            sx={{ height: 150, width: 150, objectFit: "cover" }}
            alt={`Photo de ${nom} ${prenoms}`}
            src={photoUser || userPhoto}
          />
        </Grid>
      </Grid>
      <InfoProfilCommunArtisan />
      <Box display="flex" justifyContent="center" gap={1} textAlign="center" width="100%">
        <Typography color={colorDescription}>{description}</Typography>
      </Box>
    </>
  );
};
