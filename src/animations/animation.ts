import { keyframes } from "@mui/system";
import { colorOrangeChaleureux } from "utils/color";

// Variables génériques CSS pour les propriétés communes
const commonTransformGeneric = `
  transform: scale(1);
`;
const commonTransformHoverGeneric = `
  transform: scale(1.1);
`;
const commonZoomInOutOne = `
  color: ${colorOrangeChaleureux};
  border-color: ${colorOrangeChaleureux};
`;

// Keyframes définis avec des variables CSS pour une animation générique avec transformation et couleur de fond
export const zoomInOutGenericOne = keyframes`
  0% {
    ${commonTransformGeneric}
    ${commonZoomInOutOne}
  }
  50% {
    ${commonTransformHoverGeneric}
    ${commonZoomInOutOne}
  }
  100% {
    ${commonTransformGeneric}
    ${commonZoomInOutOne}
  }
`;

// Keyframes définis avec des variables CSS pour une animation générique avec transformation uniquement
export const zoomInOutGeneric = keyframes`
  0% {
    ${commonTransformGeneric}
  }
  50% {
    ${commonTransformHoverGeneric}
  }
  100% {
    ${commonTransformGeneric}
  }
`;
