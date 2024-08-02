import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Autocomplete, Avatar, Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { colorBlue, colorVertNature } from "utils/color";
import { pays } from "utils/recherche";
import { schemaModifInfo } from "utils/yupValidation";
import { Maybe } from "yup";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  nom: string;
  prenoms: string;
  description?: Maybe<string | undefined>;
  pays: string;
  ville: string;
  adresse: string;
  numero_telephone: string;
};

export const FormModifier: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schemaModifInfo)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: colorVertNature }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
            Modifier son profil
          </Typography>
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="nom">Nom</FormLabel>
              <TextField
                {...register("nom")}
                id="nom"
                type="text"
                placeholder="Ex: Kpan"
                autoComplete="family-name"
                error={!!errors.nom}
                helperText={errors.nom?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="prenoms">Prénoms</FormLabel>
              <TextField
                {...register("prenoms")}
                id="prenoms"
                type="text"
                placeholder="Ex: Benjamin Emmanuel"
                autoComplete="given-name"
                error={!!errors.prenoms}
                helperText={errors.prenoms?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="pays">Pays</FormLabel>
              <Autocomplete
                disablePortal
                id="pays"
                options={pays}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...register("pays")}
                    {...params}
                    placeholder="Ex: Côte d(Ivoire"
                    error={!!errors.pays}
                    helperText={errors.pays?.message}
                    required
                  />
                )}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="ville">Ville</FormLabel>
              <TextField
                {...register("ville")}
                id="ville"
                type="text"
                placeholder="Ex: Abidjan"
                autoComplete="address-level2"
                error={!!errors.ville}
                helperText={errors.ville?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="adresse">Adresse</FormLabel>
              <TextField
                {...register("adresse")}
                id="adresse"
                type="text"
                placeholder="Ex: Cocody, Hotel du golf"
                autoComplete="address-line"
                error={!!errors.adresse}
                helperText={errors.adresse?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="numero_telephone">Numéro de mobile</FormLabel>
              <TextField
                {...register("numero_telephone")}
                id="numero_telephone"
                type="tel"
                placeholder="Ex: +2250707070707"
                autoComplete="tel"
                error={!!errors.numero_telephone}
                helperText={errors.numero_telephone?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="description">Veuillez décrire votre activité</FormLabel>
              <TextField
                {...register("description")}
                id="description"
                type="text"
                placeholder="Veuillez décrire votre activité"
                autoComplete="description"
                multiline
                rows={4}
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button variant="contained" color="success" disableRipple>
              Modifier
            </Button>
          </FormGrid>
        </Grid>
      </Box>
    </Container>
  );
};
