import { Autocomplete, FormLabel, Grid, OutlinedInput, TextField } from "@mui/material";
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
        <OutlinedInput
          id="date-rendez-vous"
          name="date-rendez-vous"
          type="date"
          autoComplete="bday"
          required
          inputProps={{ "aria-label": "Date de rendez-vous" }}
        />
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
          inputProps={{ "aria-label": "Numéro de mobile" }}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="adresse">Addresse</FormLabel>
        <OutlinedInput
          id="adresse"
          name="adresse"
          type="text"
          placeholder="Pays, ville, commune, quartier, rue, etc."
          autoComplete="street-address"
          required
          inputProps={{ "aria-label": "Adresse" }}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="payment" required>
          Mode de paiement
        </FormLabel>
        <Autocomplete
          disablePortal
          id="payment"
          options={payment}
          size="small"
          fullWidth
          renderInput={(params) => <TextField {...params} placeholder="Sélectionner un mode de paiement" />}
          getOptionLabel={(option) => option.label || ""}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="description" required>
          Décrire la tâche
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
          inputProps={{ "aria-label": "Description de la tâche" }}
        />
      </FormGrid>
    </Grid>
  );
};
