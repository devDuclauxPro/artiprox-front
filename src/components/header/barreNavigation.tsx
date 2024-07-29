import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Container, Drawer, MenuItem, Toolbar, Typography } from "@mui/material";
import logo from "images/barre/logo.jpeg";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { menuList } from "utils/menuList";

// Style du logo
const logoStyle = { width: "40px", height: "auto", cursor: "pointer" };

export const BarreNavigation: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Fonction pour ouvrir ou fermer le menu mobile
  const toggleDrawer = () => {
    setOpen((open) => !open);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "whitesmoke" }}>
      <Container maxWidth="xl">
        <Toolbar
          variant="regular"
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}
        >
          <Box component={Link} to="/" sx={{ flexGrow: 1 }}>
            <img src={logo} style={logoStyle} alt="logo de l'entreprise 70" color="#fff" />
          </Box>

          {/* Menu principal (visible sur les écrans moyens et plus grands) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {menuList.map((list, id) => (
              <MenuItem key={id}>
                <Typography variant="subtitle2" color="text.primary">
                  {/* Lien avec mise en forme différente pour le dernier élément */}
                  {list.link === "/espace-membre" ? (
                    <Link
                      to={list.link}
                      style={{ textDecoration: "none", color: "white", backgroundColor: "#4d8e4d", padding: 5 }}
                    >
                      {list.name}
                    </Link>
                  ) : (
                    <Link to={list.link} style={{ textDecoration: "none", color: "inherit" }}>
                      {list.name}
                    </Link>
                  )}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          {/* Menu mobile (Drawer) - visible sur les petits écrans */}
          <Box sx={{ display: { md: "none" } }}>
            <Button
              variant="text"
              color="success"
              aria-label="menu"
              sx={{ minWidth: 2, p: 0.5 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer}>
              <Box sx={{ minWidth: "80vw", padding: 2, backgroundColor: "#262931", flexGrow: 1 }}>
                {/* Liste des éléments du menu dans le Drawer */}
                {menuList.map((list, id) => (
                  <MenuItem key={id}>
                    <Typography variant="subtitle1" color="white">
                      <Link to={list.link} style={{ textDecoration: "none", color: "inherit" }}>
                        {list.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
