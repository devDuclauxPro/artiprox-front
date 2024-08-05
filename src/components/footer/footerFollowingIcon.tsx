import { Box } from "@mui/material";
import { MenuIconGeneric } from "components/generic/menuIconGeneric";
import { FC } from "react";
import { Link } from "react-router-dom";
import { TListItemSocialNet } from "types/types";

export const FooterFollowingIcon: FC = () => {
  const socialMediaLinks: TListItemSocialNet[] = MenuIconGeneric();

  return (
    <Box paddingTop={3} display="flex" justifyContent="center" alignItems="center">
      {socialMediaLinks.map((item, index) => (
        <Link key={index} to={item.linkTo} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8 }}>
          {item.icon}
        </Link>
      ))}
    </Box>
  );
};
