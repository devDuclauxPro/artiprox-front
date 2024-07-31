import ArticleIcon from "@mui/icons-material/Article";
import { Avatar, Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { colorBlue, colorVertNature } from "utils/color";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  titreArticle: string;
  photoArticle: string;
};

export const FormArticle: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

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
            <ArticleIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
            Formulaire d'ajout d'article
          </Typography>
        </Grid>
      </Grid>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="photoArticle" required>
                Ajouter une photo de l'article
              </FormLabel>
              <TextField
                {...register("photoArticle")}
                id="photoArticle"
                name="photoArticle"
                type="file"
                autoComplete="photo article"
                required
                error={!!errors.photoArticle}
                helperText={errors.photoArticle?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="titreArticle">Titre à la photo</FormLabel>
              <TextField
                {...register("titreArticle")}
                id="titreArticle"
                name="titreArticle"
                type="text"
                placeholder="Ajouter un titre à la photo de l'article"
                autoComplete="titre photo article"
                required
                error={!!errors.titreArticle}
                helperText={errors.titreArticle?.message}
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
    </Container>
  );
};
