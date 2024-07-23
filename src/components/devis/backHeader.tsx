import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const BackHeader = () => (
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: 600 }}>
    <Button startIcon={<ArrowBackRoundedIcon />} component={Link} to="/">
      Retour
    </Button>
  </Box>
);
