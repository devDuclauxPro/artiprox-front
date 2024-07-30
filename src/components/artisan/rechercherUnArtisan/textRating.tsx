import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { FC, SyntheticEvent } from "react";

const labels: { [index: string]: string } = {
  0: "0/5",
  1: "1/5",
  2: "2/5",
  3: "3/5",
  4: "4/5",
  5: "5/5"
};

type TValeur = { valeur?: number; handleChange?: (event: SyntheticEvent, newValue: number | null) => void };

export const TextRating: FC<TValeur> = ({ valeur = 1, handleChange }) => {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center"
      }}
    >
      <Rating
        name="text-feedback"
        value={valeur}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        onChange={handleChange}
      />
      <Box sx={{ ml: 2 }}>{labels[valeur]}</Box>
    </Box>
  );
};
