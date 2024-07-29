import { ImageList, ImageListItem } from "@mui/material";
import { FC } from "react";
import { TMilieuDroitPourquoiProps } from "types/types";

// Composant pour afficher une liste d'images en utilisant ImageList de MUI
export const MilieuDroitPourquoi: FC<TMilieuDroitPourquoiProps> = ({ items, cols, gap, width }) => (
  <ImageList sx={{ width, height: "100%" }} variant="woven" cols={cols} gap={gap}>
    {items.map((item) => (
      <ImageListItem key={item.img}>
        <img
          srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=161&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
);
