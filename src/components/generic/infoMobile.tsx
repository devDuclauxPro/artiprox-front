import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Info } from "components/generic/info";
import { FC, useState } from "react";
import { TInfoUserCommun } from "types/types";

type TInfoDescription = {
  description?: string;
  colorDescription?: string;
};

type TInfoGeneric = TInfoUserCommun & TInfoDescription;

export const InfoMobile: FC<TInfoGeneric> = ({ nom, prenoms, photoUser, description, colorDescription }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "auto", px: 3, pb: 3, pt: 8 }} role="presentation">
      <IconButton onClick={toggleDrawer(false)} sx={{ position: "absolute", right: 8, top: 8 }} aria-label="Fermer">
        <CloseIcon />
      </IconButton>
      <Info
        nom={nom}
        prenoms={prenoms}
        photoUser={photoUser}
        description={description}
        colorDescription={colorDescription}
      />
    </Box>
  );

  return (
    <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
      <CardContent
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          ":last-child": { pb: 2 }
        }}
      >
        <Button
          variant="text"
          endIcon={<ExpandMoreRoundedIcon />}
          onClick={toggleDrawer(true)}
          aria-label="Afficher les détails"
        >
          Vue détaillée
        </Button>
        <Drawer open={open} anchor="top" onClose={toggleDrawer(false)} sx={{ zIndex: 1300 }}>
          {DrawerList}
        </Drawer>
      </CardContent>
    </Card>
  );
};
