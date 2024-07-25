import { Autocomplete, TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { FC } from "react";
import { payment } from "utils/recherche";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export const FormAdresse: FC = () => {
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} sm={6}>
        <FormLabel htmlFor="date-rendez-vous" required>
          Date de rendez-vous
        </FormLabel>
        <OutlinedInput id="date-rendez-vous" name="date-rendez-vous" type="date" autoComplete="bday" required />
      </FormGrid>
      <FormGrid item xs={12} sm={6}>
        <FormLabel htmlFor="telephone" required>
          n° de mobile
        </FormLabel>
        <OutlinedInput
          id="telephone"
          name="telephone"
          type="tel"
          placeholder="+2250707070707"
          autoComplete="tel"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="addresse">Addresse</FormLabel>
        <OutlinedInput
          id="adresse"
          name="adresse"
          type="text"
          placeholder="Pays, ville, commune, quartier, rue, etc."
          autoComplete="street-address"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="payment" required>
          Mode de payment
        </FormLabel>
        <Autocomplete
          disablePortal
          id="payment"
          options={payment}
          size="small"
          fullWidth
          renderInput={(params) => <TextField {...params} placeholder="Sélectionner un mode de payment" />}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="description" required>
          Decrire la tâche
        </FormLabel>
        <TextField
          id="description"
          name="description"
          type="text"
          placeholder="Description de la tâche à faire"
          autoComplete="given-description"
          required
          multiline
          rows={4}
          variant="outlined"
        />
      </FormGrid>
    </Grid>
  );
};
