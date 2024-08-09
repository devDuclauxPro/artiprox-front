import { colorBlack, colorWhite } from "utils/color";

// Style utilisé pour le composant Autocomplete dans les formulaires.
export const formAutocompleteStyle = {
  backgroundColor: colorWhite,
  "& .MuiInputBase-root": {
    color: colorBlack,
    backgroundColor: colorWhite
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none"
    },
    "&:hover fieldset": {
      border: "none"
    },
    "&.Mui-focused fieldset": {
      border: "none"
    }
  }
};
