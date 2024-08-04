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
import "react-toastify/dist/ReactToastify.css";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { metiers, pays, sexe, villes } from "utils/recherche";
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
  const [showArtisanField, setShowArtisanField] = useState(false);

  const handleProfilChange = (event: React.ChangeEvent<{}>, value: ProfilOption | null) => {
    setShowArtisanField(value?.label === "Artisan");
    setValue("role_id", value?.id || "");
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
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.errors?.email[0] || error.response?.data?.message || "Une erreur est survenue."
        : "Une erreur inconnue est survenue.";
      toast.error(errorMessage);
    }
  };

  const renderTextField = (
    id: keyof Inputs,
    label: string,
    type: string = "text",
    autoComplete?: string,
    required: boolean = true
  ) => (
    <FormControl fullWidth required={required}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <TextField
        {...register(id)}
        id={id}
        type={type}
        autoComplete={autoComplete}
        error={!!errors[id]}
        helperText={(errors as any)[id]?.message}
        placeholder={`Ex: ${label}`}
        required={required}
      />
    </FormControl>
  );

  const renderAutocomplete = (id: keyof Inputs, label: string, options: any[]) => (
    <FormControl fullWidth required>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Autocomplete
        disablePortal
        id={id}
        options={options}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...register(id)}
            {...params}
            placeholder={`Ex: ${label}`}
            error={!!errors[id]}
            helperText={(errors as any)[id]?.message}
            required
          />
        )}
      />
    </FormControl>
  );

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            {renderTextField("nom", "Nom")}
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            {renderTextField("prenoms", "Prénoms")}
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            {renderAutocomplete("sexe", "Choisir mon sexe", sexe)}
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
                isOptionEqualToValue={(option, value) => option.id === value.id}
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
          {showArtisanField && (
            <>
              <FormGrid item xs={12} md={6}>
                {renderAutocomplete("metier", "Metier", metiers)}
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                {renderTextField("description", "Description")}
              </FormGrid>
            </>
          )}
          <FormGrid item xs={12} md={6}>
            {renderAutocomplete("pays", "Pays", pays)}
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            {renderAutocomplete("ville", "Ville", villes)}
          </FormGrid>
          <FormGrid item xs={12}>
            {renderTextField("adresse", "Adresse")}
          </FormGrid>
          <FormGrid item xs={12} sm={6}>
            {renderTextField("numero_telephone", "Numéro de mobile", "tel", "tel")}
          </FormGrid>
          <FormGrid item xs={12} sm={6}>
            {renderTextField("email", "Email", "email", "email")}
          </FormGrid>
          <FormGrid item xs={12}>
            {renderTextField("password", "Mot de passe", "password", "new-password")}
          </FormGrid>
          <FormGrid item xs={12}>
            {renderTextField("confPassword", "Répéter le mot de passe", "password", "new-password")}
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
