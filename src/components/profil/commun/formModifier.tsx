import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Autocomplete, Avatar, Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import axios from "axios";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { metiers, pays, sexe, villes } from "utils/recherche";
import { schemaModifInfo } from "utils/yupValidation";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  nom: string;
  prenoms: string;
  sexe: string;
  description?: string;
  metier?: string;
  pays: string;
  ville: string;
  adresse: string;
  numero_telephone: string;
};

type Option = {
  label: string;
};

export const FormModifier: FC = () => {
  const { user, token } = useSelector((state: RootState) => state.user);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schemaModifInfo)
  });

  useEffect(() => {
    if (user) {
      setValue("nom", user.nom);
      setValue("prenoms", user.prenoms);
      setValue("sexe", user.sexe as string);
      setValue("description", user.description || "");
      setValue("pays", user.pays);
      setValue("ville", user.ville);
      setValue("adresse", user.adresse);
      setValue("numero_telephone", user.numero_telephone);
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      await axios.put(`${apiUrl}/update`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      toast.success("Modification réussie !");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Une erreur est survenue.";
        toast.error(`${errorMessage}`);
      } else {
        toast.error("Une erreur inconnue est survenue.");
      }
    }
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
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="sexe">Choisir son sexe</FormLabel>
              <Autocomplete
                disablePortal
                id="sexe"
                options={sexe}
                getOptionLabel={(option: Option) => option.label}
                defaultValue={sexe.find((s) => s.label === user?.sexe) || null}
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
          {user?.role_id === 3 && (
            <>
              <FormGrid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="metier">Métier</FormLabel>
                  <Autocomplete
                    disablePortal
                    id="metier"
                    options={metiers}
                    getOptionLabel={(option: Option) => option.label}
                    defaultValue={sexe.find((s) => s.label === user?.metier) || null}
                    fullWidth
                    renderInput={(params) => (
                      <TextField
                        {...register("metier")}
                        {...params}
                        placeholder="Ex: Métier"
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
                getOptionLabel={(option: Option) => option.label}
                defaultValue={pays.find((s) => s.label === user?.pays) || null}
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
                getOptionLabel={(option: Option) => option.label}
                defaultValue={villes.find((s) => s.label === user?.ville) || null}
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
            <Button type="submit" variant="contained" color="success" disableRipple>
              Modifier
            </Button>
          </FormGrid>
        </Grid>
      </Box>
      <ToastContainer />
    </Container>
  );
};
