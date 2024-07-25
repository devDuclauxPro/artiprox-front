import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const artisan = [
  {
    nomArtisan: "Plombier",
    telephone: "+2250505050505",
    email: "artisan@gmail.com",
    addresse: "Rue Washington, Cocody, Abidjan, Côte d'Ivoire"
  }
];

export const Revoir: FC = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="column" divider={<Divider flexItem />} spacing={2} sx={{ my: 2 }}>
        <>
          <Typography variant="subtitle2" gutterBottom>
            Détails du client
          </Typography>
          <Typography gutterBottom>Kpan Emmanuel Ange</Typography>
          <Typography color="text.secondary" gutterBottom>
            +2250707070707
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            exemple@gmail.com
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Rue Washington, Cocody, Abidjan, Côte d'Ivoire
          </Typography>
        </>
        <>
          <Typography variant="subtitle2" gutterBottom>
            Détails de l'artisan
          </Typography>
          <Grid container>
            {artisan.map((art) => (
              <Box key={art.nomArtisan}>
                <Stack direction="column" spacing={1} useFlexGap sx={{ width: "100%", mb: 1 }}>
                  <Typography gutterBottom>{art.nomArtisan}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {art.telephone}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {art.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {art.addresse}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Grid>
        </>
      </Stack>
    </Stack>
  );
};
