import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { colorGris } from "utils/color";

type IconItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type MilieuDescriptionAccueilProps = {
  items: IconItem[];
  backgroundColor?: string;
  textColor?: string;
};

const iconStyle = {
  height: 50,
  width: 50,
  display: "block",
  margin: "0 auto" // Centrer l'image horizontalement
};

const titleStyle = {
  mt: 2, // Marge supérieure pour espacer du contenu au-dessus
  textAlign: "center"
};

const descriptionStyle = {
  mt: 1, // Marge supérieure pour espacer du titre
  textAlign: "center"
};

// Composant fonctionnel pour afficher les descriptions au milieu de la page d'accueil
export const MilieuDescriptionAccueil: FC<MilieuDescriptionAccueilProps> = ({
  items,
  backgroundColor = colorGris,
  textColor = "inherit"
}) => {
  return (
    <Box
      display={{ xs: "none", md: "flex" }} // Masquer sur petits écrans
      justifyContent="center"
      alignItems="center"
      py={5}
      bgcolor={backgroundColor} // Couleur de fond personnalisable
    >
      <Box width="50vw">
        {/* Largeur de 50% de la vue pour les grands écrans */}
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              {/* Conteneur pour l'icône avec un alignement centré */}
              <Box component="img" sx={iconStyle} alt={item.alt} src={item.src} />
              {/* Titre avec un texte centré */}
              <Typography variant="subtitle2" component="p" sx={titleStyle} color={textColor}>
                {item.title}
              </Typography>
              {/* Description avec un texte centré */}
              <Typography variant="body2" component="p" sx={descriptionStyle} color={textColor}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
