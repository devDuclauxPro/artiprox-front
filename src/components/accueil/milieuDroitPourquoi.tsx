import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FC } from "react";
import { itemMilieuDroitPourquoi } from "utils/menuList";

// Composant pour afficher une liste d'images en utilisant ImageList de MUI
export const MilieuDroitPourquoi: FC = () => {
  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }} // Ajuster la largeur et la hauteur du conteneur
      variant="woven" // Utilisation du style "woven" pour un affichage en mosaïque
      cols={3} // Nombre de colonnes dans la grille
      gap={8} // Espacement entre les images
    >
      {itemMilieuDroitPourquoi.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`} // Source pour les écrans à haute résolution
            src={`${item.img}?w=161&fit=crop&auto=format`} // Source pour les écrans normaux
            alt={item.title} // Texte alternatif pour l'image
            loading="lazy" // Chargement différé pour améliorer la performance
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
