import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { LoadingIndicator } from "animations/threeDots";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { allArticles } from "reducerToolkitStore/features/articles";

import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue } from "utils/color";
import { apiUrl } from "utils/config";

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`
  };
}

export const AfficherArticle: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const { articles } = useSelector((state: RootState) => state.articles);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/articles`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        dispatch(allArticles({ articles: response.data.articles.data }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Erreur Axios:", error.response?.data?.error || error.message);
          toast.error("Les informations fournies sont incorrectes. Veuillez les vérifier, puis réessayer.");
        } else {
          toast.error(`Erreur inconnue: ${error}`);
          console.error("Erreur inconnue:", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      console.log("Composant démonté");
    };
  }, [token, dispatch]);

  const handleDelete = async (id: number) => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      await axios.delete(`${apiUrl}/articles/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      const response = await axios.get(`${apiUrl}/articles`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      dispatch(allArticles({ articles: response.data.articles.data }));

      toast.success("Suppression réussie !");
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
    <>
      {loading ? (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <LoadingIndicator />
          <Typography variant="caption" component="h1" color={colorBlue}>
            Veuillez patienter quelques secondes...
          </Typography>
        </Box>
      ) : (
        <ImageList
          sx={{
            width: "100%",
            height: 450,
            transform: "translateZ(0)"
          }}
          rowHeight={200}
          gap={1}
        >
          {articles?.map((item) => (
            <ImageListItem key={item.id}>
              <img {...srcset(item.images_article, 250, 200)} alt={item.nom_article} loading="lazy" />
              <ImageListItemBar
                sx={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
                }}
                title={
                  <>
                    <Typography variant="caption" component="p">
                      {item.nom_article}
                    </Typography>
                    <Typography variant="caption" component="p">
                      Prix: {item.prix_article}F
                    </Typography>
                  </>
                }
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`supprimer ${item.nom_article}`}
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          ))}
          <ToastContainer />
        </ImageList>
      )}
    </>
  );
};
