import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Autocomplete, Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { FC } from "react";
import { colorBlue, colorVertNature } from "utils/color";
import { pays } from "utils/recherche";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export const FormModifier: FC = () => {
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
      <Box component="form" py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="nom" required>
              Nom
            </FormLabel>
            <TextField
              id="nom"
              name="nom"
              type="text"
              placeholder="Kouadio"
              autoComplete="nom"
              required
              fullWidth
              variant="outlined"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="prenoms" required>
              Prénoms
            </FormLabel>
            <TextField
              id="prenoms"
              name="prenoms"
              type="text"
              placeholder="Benjamin"
              autoComplete="prenoms"
              required
              fullWidth
              variant="outlined"
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="pays" required>
              Pays
            </FormLabel>
            <Autocomplete
              disablePortal
              id="pays"
              options={pays}
              fullWidth
              renderInput={(params) => <TextField required {...params} placeholder="Sélectionner votre pays" />}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="ville" required>
              Ville
            </FormLabel>
            <TextField
              id="ville"
              name="ville"
              type="text"
              placeholder="Bouaké"
              autoComplete="ville"
              required
              fullWidth
              variant="outlined"
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="addresse" required>
              Adresse
            </FormLabel>
            <TextField
              id="addresse"
              name="addresse"
              type="text"
              placeholder="Commune, quartier, rue, etc."
              autoComplete="addresse"
              required
              fullWidth
              variant="outlined"
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="telephone" required>
              N° de mobile
            </FormLabel>
            <TextField
              id="telephone"
              name="telephone"
              type="tel"
              placeholder="+2250707070707"
              autoComplete="telephone"
              required
              fullWidth
              variant="outlined"
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="description" required>
              Veuillez décrire votre activité
            </FormLabel>
            <TextField
              id="description"
              name="description"
              type="text"
              placeholder="Veuillez décrire votre activité"
              autoComplete="description"
              required
              multiline
              rows={4}
              fullWidth
              variant="outlined"
            />
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
