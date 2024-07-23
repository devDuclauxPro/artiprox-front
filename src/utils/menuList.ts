import { TMenuItem } from "types/types";

// Tableau des menus de l'application
// Chaque objet dans le tableau représente un élément de menu avec un nom et un lien associé
export const menuList: TMenuItem[] = [
  { name: "Accueil", link: "/" },
  { name: "Trouver un artisan", link: "/trouver-un-artisan" },
  { name: "Obtenir un devis", link: "/espace-membre/obtenir-un-devis" },
  { name: "Mon historique", link: "/espace-membre/mon-historique" },
  { name: "Qui sommes-nous", link: "/qui-sommes-nous" },
  { name: "Se connecter", link: "/connexion" },
  { name: "S'inscrire", link: "/inscription" },
  { name: "Espace Membre", link: "/espace-membre" }
];

// Tableau des images pour le composant "Milieu Droit Pourquoi"
// Chaque objet représente une image avec un titre associé
export const itemMilieuDroitPourquoi = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed" // Titre de l'image
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen" // Titre de l'image
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink" // Titre de l'image
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books" // Titre de l'image
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs" // Titre de l'image
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle" // Titre de l'image
  }
];
