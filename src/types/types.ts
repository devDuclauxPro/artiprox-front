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
  name: string;
};

// Type utilisé pour le paramètre du composant de l'image
export type TImageSwiperProps = {
  listImage: TListItem[];
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

export type IButtonGeneric = {
  btnText: string;
  btnLink?: string;
  btnColor?: "error" | "secondary" | "inherit" | "primary" | "success" | "info" | "warning";
  btnVariant?: "text" | "contained" | "outlined";
  btnSize?: "small" | "medium" | "large";
  btnZooInOutCard?: string;
};

export type TInfoProps = {
  nomArtisan: string;
  photoArtisan?: string;
};
export type TInfoPropsClient = {
  nomClient: string;
  photoClient?: string;
};
