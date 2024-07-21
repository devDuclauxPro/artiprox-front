import { Box, Container } from "@mui/material";
import { FooterCopyRight } from "components/footer/footerCopyRight";
import { FooterFollowingIcon } from "components/footer/footerFollowingIcon";
import { FooterListMenu } from "components/footer/footerListMenu";
import { FC } from "react";
import { colorBlack } from "utils/color";

// Composant Footer qui assemble les éléments du pied de page
export const Footer: FC = () => {
  return (
    <Box bgcolor={colorBlack} py={2}>
      <Container maxWidth="lg">
        {/* Menu de la liste de pied de page */}
        <FooterListMenu />
        {/* Icônes des réseaux sociaux */}
        <FooterFollowingIcon />
        {/* Informations sur les droits d'auteur */}
        <FooterCopyRight />
      </Container>
    </Box>
  );
};
