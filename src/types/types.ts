import { ReactNode } from "react";

// Type utilisé pour le menu de l'application
export type TMenuItem = {
  name: string;
  link: string;
};

// Type utilisé pour les reseaux sociaux de l'application
export type TListItemSocialNet = {
  linkTo: string;
  icon: ReactNode;
};

// Type utilisé dans le swiper d'image du composant homeFooter et dans le filtre
export type TListItem = {
  images_article?: string;
};

// Type utilisé pour le paramètre du composant de l'image
export type TImageSwiperProps = {
  listImage?: TListItem[];
  artisanImage?: boolean;
};

// Type utilisé pour les breakpoints de l'application
export type TBreakpoints = {
  [key: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
};

// Type utilisé pour le paramètre du composant GenericCardComponent
export type TGenericCardComponent = {
  btnText: string;
  cardDescription?: string;
  btnLink?: string;
  btnColor?: "error" | "secondary" | "inherit" | "primary" | "success" | "info" | "warning";
  btnSize?: "small" | "medium" | "large";
  btnVariant?: "text" | "contained" | "outlined";
  cardDescriptionColor?: string;
  btnZooInOutCard?: string;
};

// Type utilisé pour définir les propriétés d'un bouton générique
export type IButtonGeneric = {
  btnText: string;
  btnLink?: string;
  btnColor?: "error" | "secondary" | "inherit" | "primary" | "success" | "info" | "warning";
  btnVariant?: "text" | "contained" | "outlined";
  btnSize?: "small" | "medium" | "large";
  btnZooInOutCard?: string;
};

// Type utilisé pour définir les informations sur un artisan
export type TInfoProps = {
  nomArtisan: string;
  photoArtisan?: string;
};

// Type utilisé pour définir des informations communes sur un utilisateur
export type TInfoUserCommun = {
  nom: string;
  prenoms: string;
  photoUser?: string;
};

// Type utilisé pour définir un élément d'information
export type TInfoItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

// Type utilisé pour définir les propriétés du composant MilieuGauchePourquoi
export type TMilieuGauchePourquoiProps = {
  title: string;
  subtitle: string;
  introduction: string;
  accompaniment: string;
  items: TInfoItem[];
};

// Type utilisé pour définir les propriétés du composant MilieuDroitPourquoi
export type TMilieuDroitPourquoiProps = {
  items: { img: string; title: string }[];
  cols: number;
  gap: number;
  width: string;
};

// Type utilisé pour définir les données d'une ligne dans un tableau
export type TRowData = {
  id: number;
  fullName: string;
  email: string;
  contact: string;
  interne: string;
  message: string;
};
