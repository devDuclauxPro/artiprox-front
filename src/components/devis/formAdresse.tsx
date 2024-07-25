import { TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
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
        <FormLabel htmlFor="addresse">Addresse</FormLabel>
        <TextField
          id="adresse"
          name="adresse"
          type="text"
          placeholder="Pays, ville, commune, quartier, rue, etc."
          autoComplete="street-address"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} sm={6}>
        <FormLabel htmlFor="telephone" required>
          n° de mobile
        </FormLabel>
        <TextField
          id="telephone"
          name="telephone"
          type="tel"
          placeholder="+2250707070707"
          autoComplete="tel"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} sm={6}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <TextField
          id="email"
          name="email"
          type="email"
          placeholder="Votre adresse e-mail"
          autoComplete="email"
          required
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
          rows={4} // Vous pouvez ajuster le nombre de lignes selon vos besoins
          variant="outlined" // Utilise l'outlined variant pour avoir le même style que OutlinedInput
        />
      </FormGrid>
    </Grid>
  );
};
