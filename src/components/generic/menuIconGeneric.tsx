import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TListItemSocialNet } from "types/types";

export const MenuIconGeneric = (): TListItemSocialNet[] => {
  const listFollowing: TListItemSocialNet[] = [
    { linkTo: "https://youtube.com/@artiprox", icon: <YouTubeIcon color="warning" /> },
    { linkTo: "https://tiktok.com/@arti.prox", icon: <PhotoCameraFrontIcon color="warning" /> },
    { linkTo: "https://linkedin.com/in/arti-prox-56046331a", icon: <LinkedInIcon color="warning" /> },
    { linkTo: "https://facebook.com/people/Arti-prox/61563205473351", icon: <FacebookIcon color="warning" /> }
  ];

  return listFollowing;
};
