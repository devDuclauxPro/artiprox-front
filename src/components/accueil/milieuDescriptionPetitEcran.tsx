import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import logo from "images/barre/logo.jpeg";
import { FC } from "react";
import { colorBleuFonce } from "utils/color";

// Composant pour afficher la description sur les petits écrans
export const MilieuDescriptionPetitEcran: FC = () => {
  return (
    <Box mt={8} display={{ md: "none" }} component="section">
      {/* Conteneur principal pour le contenu */}
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Grid container spacing={0.5} justifyContent="center">
          <Grid item xs={12}>
            {/* Affichage du logo avec un centrage automatique */}
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
                display: "block",
                margin: "0 auto"
              }}
              alt="logo du site"
              src={logo}
            />
          </Grid>
          <Grid item xs={12}>
            {/* Texte de la description centré avec une couleur spécifique */}
            <Typography variant="subtitle2" component="p" color={colorBleuFonce} textAlign="center">
              ArtiProx | les artisans près de chez moi
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* Séparateur pour ajouter une ligne de séparation */}
      <Divider variant="middle" />
    </Box>
  );
};
