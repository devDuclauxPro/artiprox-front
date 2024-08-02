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
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { metiers, pays, profil } from "utils/recherche";
import { schemaInscription } from "utils/yupValidation";
import { Maybe } from "yup";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  nom: string;
  prenoms: string;
  role: string;
  metier?: Maybe<string | undefined>;
  description?: Maybe<string | undefined>;
  pays: string;
  ville: string;
  adresse: string;
  numero_telephone: string;
  email: string;
  password: string;
  confPassword: string;
};

export const FormInscription: FC = () => {
  const [showArtisanField, setShowArtisanField] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schemaInscription) });

  const handleProfilChange = (event: React.ChangeEvent<{}>, value: { label: string } | null) => {
    // Vérifiez si `value` n'est pas null avant d'accéder à `value.label`
    if (value && value.label === "Artisan") {
      setShowArtisanField(true);
    } else {
      setShowArtisanField(false);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      await axios.post(`${apiUrl}/register`, data);
      toast.success("Inscription réussie !");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Vérifiez la structure de l'erreur pour extraire les messages
        const errorMessage =
          error.response?.data?.message || error.response?.data?.errors?.["email"] || "Une erreur est survenue.";
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
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="profil">Je suis un</FormLabel>
              <Autocomplete
                disablePortal
                id="profil"
                options={profil}
                fullWidth
                onChange={(event, value) => handleProfilChange(event, value)}
                renderInput={(params) => (
                  <TextField
                    {...register("role")}
                    {...params}
                    placeholder="Ex: Client"
                    error={!!errors.role}
                    helperText={errors.role?.message}
                    required
                  />
                )}
              />
            </FormControl>
          </FormGrid>
          {showArtisanField && (
            <>
              <FormGrid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="metier">Metier</FormLabel>
                  <Autocomplete
                    disablePortal
                    id="metier"
                    options={metiers}
                    fullWidth
                    renderInput={(params) => (
                      <TextField
                        {...register("metier")}
                        {...params}
                        placeholder="Ex: Metier"
                        error={!!errors.metier}
                        helperText={errors.metier?.message}
                      />
                    )}
                  />
                </FormControl>
              </FormGrid>
              <FormGrid item xs={12} md={6}>
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
            </>
          )}
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
          <FormGrid item xs={12} sm={6}>
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
          <FormGrid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                {...register("email")}
                id="email"
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
