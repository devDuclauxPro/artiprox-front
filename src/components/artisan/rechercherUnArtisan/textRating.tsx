import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { FC, SyntheticEvent } from "react";

type TValeur = {
  valeur?: number;
  handleChange?: (event: SyntheticEvent, newValue: number | null) => void;
};

export const TextRating: FC<TValeur> = ({ valeur = 0, handleChange }) => {
  // Force the value to be a number
  const currentValue = Number(valeur);

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
        value={currentValue}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        onChange={(event, newValue) => handleChange && handleChange(event, newValue)}
        aria-label={`Évaluation: ${currentValue}`}
      />
    </Box>
  );
};
