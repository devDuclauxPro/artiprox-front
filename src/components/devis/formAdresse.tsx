import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export const FormAdresse: FC = () => {
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormControl fullWidth required>
          <FormLabel htmlFor="adresse">Adresse</FormLabel>
          <TextField
            id="adresse"
            name="adresse"
            type="text"
            placeholder="Pays, ville, commune, quartier, rue, etc."
            autoComplete="street-address"
            required
          />
        </FormControl>
      </FormGrid>
      <FormGrid item xs={12} sm={6}>
        <FormControl fullWidth required>
          <FormLabel htmlFor="telephone">n° de mobile</FormLabel>
          <TextField
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="+2250707070707"
            autoComplete="tel"
            required
          />
        </FormControl>
      </FormGrid>
      <FormGrid item xs={12} sm={6}>
        <FormControl fullWidth required>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Votre adresse e-mail"
            autoComplete="email"
            required
          />
        </FormControl>
      </FormGrid>
      <FormGrid item xs={12}>
        <FormControl fullWidth required>
          <FormLabel htmlFor="description">Décrire la tâche</FormLabel>
          <TextField
            id="description"
            name="description"
            type="text"
            placeholder="Description de la tâche à faire"
            autoComplete="given-description"
            required
            multiline
            rows={4} // Ajustez le nombre de lignes selon vos besoins
            variant="outlined" // Utilise l'outlined variant pour avoir le même style que OutlinedInput
          />
        </FormControl>
      </FormGrid>
    </Grid>
  );
};
