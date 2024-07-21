import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { TListItemSocialNet } from "types/types";

// Fonction qui retourne une liste d'objets contenant les icônes de réseaux sociaux et leurs liens
export const MenuIconGeneric = (): TListItemSocialNet[] => {
  // Liste des réseaux sociaux avec leurs icônes et liens associés
  const listFollowing: TListItemSocialNet[] = [
    { linkTo: "https://x.com/artiprox", icon: <XIcon color="warning" /> },
    { linkTo: "https://instagram.com/artiprox", icon: <InstagramIcon color="warning" /> },
    { linkTo: "https://linkedin.com/in/artiprox", icon: <LinkedInIcon color="warning" /> },
    { linkTo: "https://facebook.com/artiprox", icon: <FacebookIcon color="warning" /> }
  ];

  return listFollowing;
};
