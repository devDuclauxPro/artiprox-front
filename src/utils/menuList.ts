import { TMenuItem } from "types/types";

// Tableau des menus privés dans l'application
export const menuListPrive: TMenuItem[] = [
  { name: "Accueil", link: "/" },
  { name: "Trouver un artisan", link: "/trouver-un-artisan" },
  { name: "Espace Membre", link: "/profil" }
];

// Tableau des menus publiques dans l'application
export const menuList: TMenuItem[] = [
  { name: "Accueil", link: "/" },
  { name: "Trouver un artisan", link: "/trouver-un-artisan" },
  { name: "Se connecter", link: "/connexion" },
  { name: "S'inscrire", link: "/inscription" }
];
