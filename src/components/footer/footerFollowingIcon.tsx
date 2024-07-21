import { Box } from "@mui/material";
import { MenuIconGeneric } from "components/generic/menuIconGeneric";
import { FC } from "react";
import { Link } from "react-router-dom";
import { TListItemSocialNet } from "types/types";

// Composant qui affiche des icônes de réseaux sociaux avec des liens dans le pied de page
export const FooterFollowingIcon: FC = () => {
  // Récupération des liens et icônes de réseaux sociaux
  const socialMediaLinks: TListItemSocialNet[] = MenuIconGeneric();

  return (
    <Box
      paddingTop={3} // Espacement supérieur pour séparer du contenu au-dessus
      display="flex"
      justifyContent="center" // Centre les icônes horizontalement
      alignItems="center" // Centre les icônes verticalement
    >
      {socialMediaLinks.map((item, index) => (
        <Link
          key={index} // Utilisation de l'index comme clé unique (si list.linkTo est unique, vous pouvez utiliser list.linkTo comme clé)
          to={item.linkTo}
          target="_blank" // Ouvre le lien dans un nouvel onglet
          rel="noopener noreferrer" // Sécurité pour les liens externes
          style={{ marginRight: 8 }} // Espacement entre les icônes
        >
          {item.icon}
        </Link>
      ))}
    </Box>
  );
};
