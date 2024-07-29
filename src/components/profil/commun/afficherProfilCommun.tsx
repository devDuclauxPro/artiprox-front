import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AfficheHistoriqueArtisan } from "components/historique/artisan/afficheHistoriqueArtisan";
import { AfficheHistoriqueClient } from "components/historique/client/afficheHistoriqueClient";
import { FC } from "react";
import { AfficherArticle } from "../artisan/afficherArticle";
import { FormArticle } from "../artisan/formArticle";
import { FormModifier } from "./formModifier";
import { FormModPasse } from "./formModPasse";
import { Info } from "./info";
import { InfoMobile } from "./infoMobile";

const cardStyles = {
  display: { xs: "flex", md: "none" },
  width: "100%"
};

const cardContentStyles = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  ":last-child": { pb: 2 }
};

export const AfficherProfilCommun: FC = () => {
  return (
    <Box minHeight="80vh">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            alignItems: "start",
            pt: 4,
            px: 10,
            gap: 4
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, width: "100%", maxWidth: 500 }}>
            <Info nomUser={"Kpan Emmanuel grand"} />
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 }
          }}
        >
          <Card sx={cardStyles}>
            <CardContent sx={cardContentStyles}>
              <Typography variant="body1">{"Kpan Emmanuel mobile"}</Typography>
              <InfoMobile nomUser={"Kpan Emmanuel mobile"} />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              gap: { xs: 5, md: "none" }
            }}
          >
            <Stack spacing={2} useFlexGap>
              <FormModifier />
              <FormModPasse />
              <AfficheHistoriqueArtisan />
              <AfficheHistoriqueClient />
              <FormArticle />
              <AfficherArticle />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
