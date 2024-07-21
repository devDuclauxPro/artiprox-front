import { Button } from "@mui/material";
import { zoomInOutGeneric } from "animations/animation";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IButtonGeneric } from "types/types";

// Composant bouton générique qui peut être utilisé avec ou sans lien
export const BtnGeneric: FC<IButtonGeneric> = ({
  btnLink,
  btnText,
  btnColor = "success", // Valeur par défaut pour btnColor
  btnVariant = "contained", // Valeur par défaut pour btnVariant
  btnSize = "medium", // Valeur par défaut pour btnSize
  btnZooInOutCard = zoomInOutGeneric // Valeur par défaut pour btnZooInOutCard
}) => {
  const buttonProps = {
    disableRipple: true, // Supprime l'effet de clic par défaut
    size: btnSize,
    variant: btnVariant,
    color: btnColor,
    sx: {
      textTransform: "inherit", // Ne modifie pas la casse du texte
      "&:hover": { animation: `${btnZooInOutCard} 1s infinite` } // Animation au survol
    }
  };

  return btnLink ? (
    <Button {...buttonProps}>
      <Link to={btnLink} style={{ color: "inherit", textDecoration: "none" }}>
        {btnText}
      </Link>
    </Button>
  ) : (
    <Button {...buttonProps}>{btnText}</Button>
  );
};
