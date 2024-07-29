import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { colorBleuFonce } from "utils/color";

type MilieuDescriptionPetitEcranProps = {
  logoSrc: string;
  altText: string;
  description: string;
  textColor?: string;
  backgroundColor?: string;
};

const logoStyle = {
  height: 50,
  width: 50,
  display: "block",
  margin: "0 auto"
};

// Composant pour afficher la description sur les petits écrans
export const MilieuDescriptionPetitEcran: FC<MilieuDescriptionPetitEcranProps> = ({
  logoSrc,
  altText,
  description,
  textColor = colorBleuFonce,
  backgroundColor = "inherit"
}) => {
  return (
    <Box mt={8} display={{ md: "none" }} component="section" bgcolor={backgroundColor}>
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Grid container spacing={0.5} justifyContent="center">
          <Grid item xs={12}>
            <Box component="img" sx={logoStyle} alt={altText} src={logoSrc} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" component="p" color={textColor} textAlign="center">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider variant="middle" />
    </Box>
  );
};
