import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { colorBlue, colorVertNature } from "utils/color";
import { pays, profil } from "utils/recherche";
import { schemaInscription } from "utils/yupValidation";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  nom: string;
  prenoms: string;
  profil: string;
  description: string;
  pays: string;
  ville: string;
  adresse: string;
  telephone: string;
  email: string;
  password: string;
  confPassword: string;
};

export const FormInscription: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schemaInscription)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
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
            Formulaire d'inscription
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
                name="nom"
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
                name="prenoms"
                type="text"
                placeholder="Ex: Benjamin Emmanuel"
                autoComplete="given-name"
                error={!!errors.prenoms}
                helperText={errors.prenoms?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="profil">Je suis un</FormLabel>
              <Autocomplete
                disablePortal
                id="profil"
                options={profil}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...register("profil")}
                    {...params}
                    placeholder="Ex: Client"
                    error={!!errors.profil}
                    helperText={errors.profil?.message}
                    required
                  />
                )}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="description">Veuillez décrire votre activité</FormLabel>
              <TextField
                {...register("description")}
                id="description"
                name="description"
                type="text"
                placeholder="Veuillez décrire votre activité"
                autoComplete="description"
                multiline
                rows={4}
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description?.message}
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
                name="ville"
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
                name="adresse"
                type="text"
                placeholder="Ex: Cocody, Hotel du golf"
                autoComplete="address-line"
                error={!!errors.adresse}
                helperText={errors.adresse?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="telephone">Numéro de mobile</FormLabel>
              <TextField
                {...register("telephone")}
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="Ex: +2250707070707"
                autoComplete="tel"
                error={!!errors.telephone}
                helperText={errors.telephone?.message}
                required
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
                placeholder="Ex: exemple@gmail.com"
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="password">Mot de passe</FormLabel>
              <TextField
                {...register("password")}
                id="password"
                name="password"
                type="password"
                placeholder="**********"
                autoComplete="new-password"
                error={!!errors.password}
                helperText={errors.password?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="confPassword">Répéter le mot de passe</FormLabel>
              <TextField
                {...register("confPassword")}
                id="confPassword"
                name="confPassword"
                type="password"
                placeholder="**********"
                autoComplete="new-password"
                error={!!errors.confPassword}
                helperText={errors.confPassword?.message}
                required
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button type="submit" variant="contained" color="success" disableRipple>
              S'inscrire
            </Button>
          </FormGrid>
        </Grid>
      </Box>
    </Container>
  );
};
