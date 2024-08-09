import { TBreakpoints } from "types/types";

// Objet de configuration des breakpoints pour la page d'accueil
export const listBreakPoint: TBreakpoints = {
  // Pour les largeurs d'écran >= 0px (xs)
  0: {
    slidesPerView: 1, // Nombre de diapositives visibles
    spaceBetween: 10 // Espace entre les diapositives en pixels
  },
  // Pour les largeurs d'écran >= 600px (sm)
  600: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  // Pour les largeurs d'écran >= 960px (md)
  960: {
    slidesPerView: 3,
    spaceBetween: 10
  },
  // Pour les largeurs d'écran >= 1280px (lg)
  1280: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  // Pour les largeurs d'écran >= 1920px (xl)
  1920: {
    slidesPerView: 5,
    spaceBetween: 10
  }
};
