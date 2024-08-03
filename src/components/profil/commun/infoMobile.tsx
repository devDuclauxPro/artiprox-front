import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { FC, useState } from "react";
import { TInfoUserCommun } from "types/types";
import { Info } from "./info";

export const InfoMobile: FC<TInfoUserCommun> = ({ nom, prenoms, photoUser }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "auto", px: 3, pb: 3, pt: 8 }} role="presentation">
      <IconButton onClick={toggleDrawer(false)} sx={{ position: "absolute", right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
      <Info nom={nom} prenoms={prenoms} photoUser={photoUser} />
    </Box>
  );

  return (
    <>
      <Button variant="text" endIcon={<ExpandMoreRoundedIcon />} onClick={toggleDrawer(true)}>
        Vue détaillée
      </Button>
      <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};
