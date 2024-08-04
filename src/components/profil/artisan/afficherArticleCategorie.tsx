import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { allArticlesCategorie } from "reducerToolkitStore/features/categories";
import { RootState } from "reducerToolkitStore/store/store";
import { apiUrl } from "utils/config";

import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { colorRougeVif } from "utils/color";

export const AfficherArticleCategorie: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const { articlesCartegories } = useSelector((state: RootState) => state.articleCategorie);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
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

  const handleDelete = async (id: number) => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      await axios.delete(`${apiUrl}/categories/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      const response = await axios.get(`${apiUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      dispatch(allArticlesCategorie({ articlesCartegories: response.data.categories.data }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Une erreur est survenue.";
        console.error(errorMessage);
      } else {
        console.error("Une erreur inconnue est survenue.");
      }
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <List sx={{ width: "100%", maxWidth: 360 }}>
          {articlesCartegories?.map((item) => (
            <ListItem
              key={item.categorie_id}
              disableGutters
              secondaryAction={
                <IconButton
                  sx={{ color: colorRougeVif }}
                  aria-label={`supprimer ${item.nom_categorie}`}
                  onClick={() => handleDelete(parseInt(item.categorie_id))}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              }
            >
              <ListItemText primary={item.nom_categorie} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
