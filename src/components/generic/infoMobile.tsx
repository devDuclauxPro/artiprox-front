import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import { Card, CardContent } from "@mui/material";
import { Info } from "components/generic/info";
import { FC } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState } from "react";
import { TInfoUserCommun } from "types/types";

type TInfoDescription = {
  description?: string;
  colorDescroption?: string;
};
type TInfoGeneric = TInfoUserCommun & TInfoDescription;

export const InfoMobile: FC<TInfoGeneric> = ({ nom, prenoms, photoUser, description, colorDescroption }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "auto", px: 3, pb: 3, pt: 8 }} role="presentation">
      <IconButton onClick={toggleDrawer(false)} sx={{ position: "absolute", right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
      <Info
        nom={nom}
        prenoms={prenoms}
        photoUser={photoUser}
        description={description}
        colorDescroption={colorDescroption}
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
        <Button variant="text" endIcon={<ExpandMoreRoundedIcon />} onClick={toggleDrawer(true)}>
          Vue détaillée
        </Button>
        <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </CardContent>
    </Card>
  );
};
