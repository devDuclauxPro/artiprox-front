import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Autocomplete, Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
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
            <OutlinedInput id="nom" name="nom" type="name" placeholder="Kouadio" autoComplete="nom" required />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="prenoms" required>
              Prénoms
            </FormLabel>
            <OutlinedInput
              id="prenoms"
              name="prenoms"
              type="last-name"
              placeholder="Benjamain"
              autoComplete="Prénoms"
              required
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="country" required>
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
            <FormLabel htmlFor="address1" required>
              Ville
            </FormLabel>
            <OutlinedInput
              id="ville"
              name="ville"
              type="ville"
              placeholder="Bouaké"
              autoComplete="votre ville"
              required
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="addresse">Addresse</FormLabel>
            <OutlinedInput
              id="addresse"
              name="addresse"
              type="addresse"
              placeholder="Commune, quatier, rue,etc"
              autoComplete="votre addresse"
              required
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="telephone" required>
              n° de mobile
            </FormLabel>
            <OutlinedInput
              id="telephone"
              name="telephone"
              type="telephone"
              placeholder="+2250707070707"
              autoComplete="telephone"
              required
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
