// AfficherProfilArtisan.tsx
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Info } from "components/generic/info";
import { InfoMobile } from "components/generic/infoMobile";
import { FC } from "react";
import { IArtisan } from "reducerToolkitStore/features/trouverArtisan";
import { CardUnArtisan } from "./cardUnArtisan";

export const AfficherProfilArtisan: FC<IArtisan> = ({ nom, prenoms, description }) => {
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
            gap: 4,
            mt: 5
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, width: "100%", maxWidth: 500 }}>
            <Info nom={nom} prenoms={prenoms} description={description} />
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
            gap: { xs: 4, md: 8 },
            mt: 5
          }}
        >
          <InfoMobile nom={nom} prenoms={prenoms} description={description} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              gap: { xs: 5, md: "none" }
            }}
          >
            <Stack spacing={2} useFlexGap>
              <CardUnArtisan />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
