import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { TMilieuGauchePourquoiProps } from "types/types";
import { colorBlue, colorOrange } from "utils/color";

// Composant pour afficher la section "Pourquoi faire appel à nous ?"
export const MilieuGauchePourquoi: FC<TMilieuGauchePourquoiProps> = ({
  title,
  subtitle,
  introduction,
  accompaniment,
  items
}) => (
  <>
    <Box>
      <Typography
        variant="h5"
        component="h1"
        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
        textAlign={{ xs: "center", md: "justify" }}
        color={colorBlue}
      >
        {title}
        <Typography variant="h5" component="span" color={colorOrange} sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
          {subtitle}
        </Typography>
      </Typography>
      <Typography variant="body1" component="p" pt={2} textAlign="justify">
        {introduction}
      </Typography>
      <Typography variant="body1" component="p" py={2} textAlign="justify">
        {accompaniment}
      </Typography>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center" py={5}>
      <Box width="50vw">
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 30,
                  display: "block",
                  margin: "0 auto"
                }}
                alt={item.alt}
                src={item.src}
              />
              <Typography variant="subtitle2" component="p" textAlign="center" sx={{ mt: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" component="p" textAlign="center" sx={{ mt: 0.5 }}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </>
);
