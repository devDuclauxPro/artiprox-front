import { Box, MenuItem, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "reducerToolkitStore/store/store";
import { colorWhite } from "utils/color";
import { menuList, menuListPrive } from "utils/menuList";

export const FooterListMenu: FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  if (user?.role_id) {
    return (
      <Box
        pt={3}
        flexGrow={1}
        sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center" }}
      >
        {menuListPrive.map((list) => (
          <MenuItem key={list.link}>
            <Typography variant="subtitle2" color={colorWhite}>
              <Link to={list.link} style={{ textDecoration: "none", color: "inherit" }}>
                {list.name}
              </Link>
            </Typography>
          </MenuItem>
        ))}
      </Box>
    );
  }
  return (
    <Box
      pt={3}
      flexGrow={1}
      sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center" }}
    >
      {menuList.map((list) => (
        <MenuItem key={list.link}>
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
