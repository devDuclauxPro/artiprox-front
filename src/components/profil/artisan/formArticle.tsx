import ArticleIcon from "@mui/icons-material/Article";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { FC } from "react";
import { colorBlue, colorVertNature } from "utils/color";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export const FormArticle: FC = () => {
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
            <ArticleIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
            Formulaire d'ajout d'article
          </Typography>
        </Grid>
      </Grid>
      <Box component="form" py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="photoArticle" required>
              Ajouter une photo de l'article
            </FormLabel>
            <OutlinedInput id="photoArticle" name="photoArticle" type="file" autoComplete="photo article" required />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="titreArticle" required>
              Titre à la photo
            </FormLabel>
            <OutlinedInput
              id="titreArticle"
              name="titreArticle"
              type="text"
              placeholder="Ajouter un titre à la photo de l'article"
              autoComplete="titre photo article"
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
