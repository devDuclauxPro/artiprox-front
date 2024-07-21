import { colorBlack, colorWhite } from "utils/color";

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
