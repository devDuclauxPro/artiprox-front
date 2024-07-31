import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TListItemSocialNet } from "types/types";

// Fonction qui retourne une liste d'objets contenant les icônes de réseaux sociaux et leurs liens
export const MenuIconGeneric = (): TListItemSocialNet[] => {
  // Liste des réseaux sociaux avec leurs icônes et liens associés
  const listFollowing: TListItemSocialNet[] = [
    { linkTo: "https://youtube.com/@artiprox", icon: <YouTubeIcon color="warning" /> },
    { linkTo: "https://tiktok.com/@arti.prox", icon: <PhotoCameraFrontIcon color="warning" /> },
    { linkTo: "https://linkedin.com/in/arti-prox-56046331a", icon: <LinkedInIcon color="warning" /> },
    { linkTo: "https://facebook.com/people/Arti-prox/61563205473351", icon: <FacebookIcon color="warning" /> }
  ];

  return listFollowing;
};
