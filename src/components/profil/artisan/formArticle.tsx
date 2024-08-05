import { yupResolver } from "@hookform/resolvers/yup";
import ArticleIcon from "@mui/icons-material/Article";
import { Autocomplete, Avatar, Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { LoadingIndicator } from "animations/threeDots";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { allArticlesCategorie, ICategorie } from "reducerToolkitStore/features/categories";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue, colorVertNature } from "utils/color";
import { apiUrl } from "utils/config";
import { imageValidation } from "utils/yupValidation";
import { AfficherArticle } from "./afficherArticle";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  nom_article?: string;
  images_article: FileList;
  prix_article?: string;
  id_categorie?: string;
  paramatres?: string;
};

export const FormArticle: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(imageValidation)
  });
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state: RootState) => state.user);

  const { articlesCartegories } = useSelector((state: RootState) => state.articleCategorie);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/categories`, configureAxiosHeaders(token ?? ""));
        dispatch(allArticlesCategorie({ articlesCartegories: response.data.categories.data }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Erreur Axios:", error.response?.data?.error || error.message);
        } else {
          console.error("Erreur inconnue:", error);
        }
      }
    };
    fetchData();

    return () => {
      console.log("Composant démonté");
    };
  }, [token, dispatch]);

  const handleCategorieChange = (event: React.ChangeEvent<{}>, value: ICategorie | null) => {
    setValue("id_categorie", value?.categorie_id || "");
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      if (!apiUrl) {
        toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
        return;
      }

      if (data.images_article.length === 0) {
        toast.error("Veuillez sélectionner une image.");
        return;
      }
      const newData = {
        nom_article: data.nom_article,
        prix_article: data.prix_article,
        type_article: "artisanal",
        images_article: data.images_article[0],
        category_id: data.id_categorie,
        paramatres: "images_articles"
      };

      const response = await axios.post(`${apiUrl}/articles/create`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      toast.success(response.data.article);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
        toast.error("Les informations fournies sont incorrectes. Veuillez les vérifier, puis réessayer");
      } else {
        toast.error(`Erreur inconnue: ${error}`);
        console.error("Erreur inconnue:", error);
      }
    } finally {
      setLoading(false);
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
            <ArticleIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
            Formulaire d'article
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
                {...register("images_article")}
                id="photoArticle"
                type="file"
                autoComplete="photo article"
                required
                error={!!errors.images_article}
                helperText={errors.images_article?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="nomArticle">Nom à la photo</FormLabel>
              <TextField
                {...register("nom_article")}
                id="nomArticle"
                placeholder="Ajouter un nom à la photo de l'article"
                autoComplete="nom photo article"
                error={!!errors.nom_article}
                helperText={errors.nom_article?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="prixArticle">Prix de l'article</FormLabel>
              <TextField
                {...register("prix_article")}
                id="prixArticle"
                placeholder="Ajouter un prix à la photo de l'article"
                autoComplete="prix photo article"
                error={!!errors.prix_article}
                helperText={errors.prix_article?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="categorie">Catégorie</FormLabel>
              <Autocomplete
                disablePortal
                id="categorie"
                options={articlesCartegories as ICategorie[]}
                getOptionLabel={(option) => option.nom_categorie}
                onChange={handleCategorieChange}
                isOptionEqualToValue={(option, value) => option.categorie_id === value.categorie_id}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Ex: Catégorie"
                    error={!!errors.id_categorie}
                    autoComplete=""
                    helperText={errors.id_categorie?.message}
                    required
                  />
                )}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button type="submit" variant="contained" color="success" disableRipple>
              Ajouter
            </Button>
          </FormGrid>
        </Grid>
      </Box>
      {loading ? (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <LoadingIndicator />
          <Typography variant="caption" component="h1" color={colorBlue}>
            Veuillez patienter quelques secondes...
          </Typography>
        </Box>
      ) : (
        <AfficherArticle />
      )}
      <ToastContainer />
    </Container>
  );
};
