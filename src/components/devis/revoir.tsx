import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBleuFonce } from "utils/color";

// Composant pour revoir les informations
export const Revoir: FC = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { devis } = useSelector((state: RootState) => state.devisRdv);
  const { resultatUnSeulArtisans } = useSelector((state: RootState) => state.trouverArtisan);

  return (
    <Stack spacing={2}>
      <Stack direction="column" divider={<Divider flexItem />} spacing={2} sx={{ my: 2 }}>
        <>
          <Typography variant="subtitle2" gutterBottom>
            Mes informations envoyées
          </Typography>
          <Typography gutterBottom>
            {user?.nom} {user?.prenoms}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {devis?.email || user?.email}
          </Typography>
          <Typography color={colorBleuFonce} gutterBottom>
            {devis?.numero_telephone}
          </Typography>
          <Typography color={colorBleuFonce} gutterBottom>
            {devis?.adresse}
          </Typography>
          <Typography color={colorBleuFonce} gutterBottom>
            {devis?.description}
          </Typography>
        </>
        <>
          <Typography variant="subtitle2" gutterBottom>
            Détails sur {resultatUnSeulArtisans?.user?.nom} {resultatUnSeulArtisans?.user?.prenoms}
          </Typography>
          <Grid container>
            <Stack direction="column" spacing={1} useFlexGap sx={{ width: "100%", mb: 1 }}>
              <Typography gutterBottom>{resultatUnSeulArtisans?.metier}</Typography>
              <Typography variant="body2" color="text.secondary">
                {resultatUnSeulArtisans?.user?.sexe}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {resultatUnSeulArtisans?.user?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {resultatUnSeulArtisans?.user?.numero_telephone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {resultatUnSeulArtisans?.user?.pays}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {resultatUnSeulArtisans?.user?.ville}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {resultatUnSeulArtisans?.user?.adresse}
              </Typography>
            </Stack>
          </Grid>
        </>
      </Stack>
    </Stack>
  );
};
