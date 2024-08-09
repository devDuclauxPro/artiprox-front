import { FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setDevisRDV } from "reducerToolkitStore/features/devisRdv";
import { RootState } from "reducerToolkitStore/store/store";
import { schemaRDV } from "utils/yupValidation";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

interface IDevisRdvInput {
  date?: string;
  description?: string;
  email?: string;
  adresse: string;
  numero_telephone: string;
}

// Composant principal du formulaire
export const FormAdresse: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<IDevisRdvInput>({
    resolver: yupResolver(schemaRDV),
    defaultValues: {
      date: "",
      description: "",
      email: "",
      adresse: "",
      numero_telephone: ""
    }
  });

  const dispatch = useDispatch();
  const { devis } = useSelector((state: RootState) => state.devisRdv);

  // Synchronisation des valeurs du formulaire avec l'état du redux
  const handleChange = (field: keyof IDevisRdvInput, value: any) => {
    setValue(field, value);
    dispatch(setDevisRDV({ devis: { ...devis, [field]: value } }));
  };

  const onSubmit = (data: IDevisRdvInput) => {
    console.log(data);
    // Ajouter la logique de soumission ici
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <FormGrid item xs={12}>
          <FormControl fullWidth required>
            <FormLabel htmlFor="adresse">Adresse</FormLabel>
            <TextField
              {...register("adresse")}
              id="adresse"
              name="adresse"
              placeholder="Pays, ville, commune, quartier, rue, etc."
              autoComplete="street-address"
              required
              value={watch("adresse")}
              onChange={(e) => handleChange("adresse", e.target.value)}
              error={!!errors.adresse}
              helperText={errors.adresse?.message}
            />
          </FormControl>
        </FormGrid>
        <FormGrid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <FormLabel htmlFor="telephone">n° de mobile</FormLabel>
            <TextField
              {...register("numero_telephone")}
              id="telephone"
              name="telephone"
              type="tel"
              placeholder="n° de telephone"
              autoComplete="tel"
              required
              value={watch("numero_telephone")}
              onChange={(e) => handleChange("numero_telephone", e.target.value)}
              error={!!errors.numero_telephone}
              helperText={errors.numero_telephone?.message}
            />
          </FormControl>
        </FormGrid>
        <FormGrid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              {...register("email")}
              id="email"
              name="email"
              type="email"
              placeholder="Votre adresse e-mail"
              autoComplete="email"
              required
              value={watch("email")}
              onChange={(e) => handleChange("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </FormControl>
        </FormGrid>
        <FormGrid item xs={12}>
          <FormControl fullWidth required>
            <FormLabel htmlFor="description">Décrire la tâche</FormLabel>
            <TextField
              {...register("description")}
              id="description"
              name="description"
              placeholder="Description de la tâche à faire"
              autoComplete="given-description"
              required
              multiline
              rows={4}
              value={watch("description")}
              onChange={(e) => handleChange("description", e.target.value)}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </FormControl>
        </FormGrid>
      </Grid>
    </form>
  );
};
