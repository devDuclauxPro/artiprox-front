import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { Layout } from "layouts/layout";
import { FC } from "react";
import { Link } from "react-router-dom";
import { colorBlue, colorVertNature } from "utils/color";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export const OublierMotPasse: FC = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ mt: 10, minHeight: "80vh" }}>
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
              REINITIALISER LE MOT DE PASSE
            </Typography>
          </Grid>
        </Grid>
        <Box component="form" py={3}>
          <Grid container spacing={3}>
            <FormGrid item xs={12}>
              <FormLabel htmlFor="email" required>
                Email
              </FormLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                placeholder="Votre adresse e-mail"
                autoComplete="email"
                required
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <Button variant="contained" color="success" disableRipple>
                Valider
              </Button>
            </FormGrid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item>
            <Link to="/inscription" style={{ textDecoration: "none" }}>
              Vous n'avez pas de compte ? S'inscrire
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
