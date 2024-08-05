import { Button } from "@mui/material";
import { zoomInOutGeneric } from "animations/animation";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IButtonGeneric } from "types/types";

export const BtnGeneric: FC<IButtonGeneric> = ({
  btnLink,
  btnText,
  btnColor = "success",
  btnVariant = "contained",
  btnSize = "medium",
  btnZooInOutCard = zoomInOutGeneric
}) => {
  const buttonProps = {
    disableRipple: true,
    size: btnSize,
    variant: btnVariant,
    color: btnColor,
    sx: {
      textTransform: "inherit",
      "&:hover": { animation: `${btnZooInOutCard} 1s infinite` }
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
