import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import iconeGratuite from "images/home/icone-gratuite.png";
import iconeQualite from "images/home/icone-qualite.png";
import iconeSimplicite from "images/home/icone-simplicite.png";
import { FC } from "react";
import { colorGris } from "utils/color";

// Définition des données des icônes à afficher
const items = [
  {
    src: iconeQualite,
    alt: "Image qualité",
    title: "Qualité",
    description: "Artisans certifiés par un label qualité"
  },
  {
    src: iconeGratuite,
    alt: "Image gratuite",
    title: "Gratuité",
    description: "Devis et accompagnement intégralement gratuit"
  },
  {
    src: iconeSimplicite,
    alt: "Image simplicité",
    title: "Simplicité",
    description: "Mise en relation simple, rapide et sécurisée"
  }
];

// Composant fonctionnel pour afficher les descriptions au milieu de la page d'accueil
export const MilieuDescriptionAccueil: FC = () => {
  return (
    <Box
      display={{ xs: "none", md: "flex" }} // Masquer sur petits écrans
      justifyContent="center"
      alignItems="center"
      py={5}
      bgcolor={colorGris} // Couleur de fond définie par colorGris
    >
      <Box width="50vw">
        {" "}
        {/* Largeur de 50% de la vue pour les grands écrans */}
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              {/* Conteneur pour l'icône avec un alignement centré */}
              <Box
                component="img"
                sx={{
                  height: 50,
                  width: 50,
                  display: "block",
                  margin: "0 auto" // Centrer l'image horizontalement
                }}
                alt={item.alt}
                src={item.src}
              />
              {/* Titre avec un texte centré */}
              <Typography
                variant="subtitle2"
                component="p"
                textAlign="center"
                sx={{ mt: 2 }} // Marge supérieure pour espacer du contenu au-dessus
              >
                {item.title}
              </Typography>
              {/* Description avec un texte centré */}
              <Typography
                variant="body2"
                component="p"
                textAlign="center"
                sx={{ mt: 1 }} // Marge supérieure pour espacer du titre
              >
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
