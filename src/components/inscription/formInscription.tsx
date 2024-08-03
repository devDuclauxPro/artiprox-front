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
import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { pays, sexe, villes } from "utils/recherche";
import { schemaInscription } from "utils/yupValidation";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  nom: string;
  prenoms: string;
  sexe: string;
  role_id: string;
  metier?: string;
  description?: string;
  pays: string;
  ville: string;
  adresse: string;
  numero_telephone: string;
  email: string;
  password: string;
  confPassword: string;
};

type ProfilOption = {
  id: string;
  label: string;
};

const profilOptions: ProfilOption[] = [
  { id: "2", label: "Client" },
  { id: "3", label: "Artisan" }
];

export const FormInscription: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schemaInscription) });

  const handleProfilChange = (event: React.ChangeEvent<{}>, value: ProfilOption | null) => {
    if (value) {
      setValue("role_id", value.id);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/register`, data);
      console.log(response.data);
      toast.success("Inscription réussie !");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || error.response?.data?.errors?.email || "Une erreur est survenue.";
        toast.error(`${errorMessage}`);
      } else {
        toast.error("Une erreur inconnue est survenue.");
      }
    }
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
              <FormLabel htmlFor="sexe">Choisir mon sexe</FormLabel>
              <Autocomplete
                disablePortal
                id="sexe"
                options={sexe}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...register("sexe")}
                    {...params}
                    placeholder="Ex: Masculin"
                    error={!!errors.sexe}
                    helperText={errors.sexe?.message}
                    required
                  />
                )}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="profil">Je suis un</FormLabel>
              <Autocomplete
                disablePortal
                id="profil"
                options={profilOptions}
                fullWidth
                onChange={handleProfilChange}
                isOptionEqualToValue={(option, value) => option === value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Ex: Client"
                    error={!!errors.role_id}
                    autoComplete=""
                    helperText={errors.role_id?.message}
                    required
                  />
                )}
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
                    placeholder="Ex: Côte d'Ivoire"
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
              <Autocomplete
                disablePortal
                id="ville"
                options={villes}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...register("ville")}
                    {...params}
                    placeholder="Ex: Abidjan"
                    autoComplete="address-level"
                    error={!!errors.ville}
                    helperText={errors.ville?.message}
                    required
                  />
                )}
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
          <FormGrid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="numero_telephone">Numéro de mobile</FormLabel>
              <TextField
                {...register("numero_telephone")}
                id="numero_telephone"
                type="tel"
                placeholder="Ex: +225 0101010101"
                autoComplete="tel"
                error={!!errors.numero_telephone}
                helperText={errors.numero_telephone?.message}
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
                type="email"
                placeholder="Ex: email@example.com"
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
      <ToastContainer />
    </Container>
  );
};
