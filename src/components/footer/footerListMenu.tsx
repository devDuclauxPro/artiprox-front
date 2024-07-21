import { Box, MenuItem, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { colorWhite } from "utils/color";
import { menuList } from "utils/menuList";

// Composant qui affiche une liste de liens de menu dans le pied de page
export const FooterListMenu: FC = () => {
  return (
    <Box
      pt={3} // Espacement supérieur pour séparer du contenu au-dessus
      flexGrow={1} // Permet à la boîte de croître pour remplir l'espace disponible
      sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center" }}
    >
      {menuList.map((list) => (
        <MenuItem key={list.link}>
          {" "}
          {/* Utilisez list.link comme clé unique pour éviter les problèmes de rendu */}
          <Typography variant="subtitle2" color={colorWhite}>
            <Link to={list.link} style={{ textDecoration: "none", color: "inherit" }}>
              {list.name}
            </Link>
          </Typography>
        </MenuItem>
      ))}
    </Box>
  );
};
