import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { LoadingIndicator } from "animations/threeDots";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlue } from "utils/color";
import { apiUrl } from "utils/config";

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`
  };
}

interface IArticle {
  id: number;
  nom_article: string;
  type_article: string;
  prix_article: string;
  images_article: string;
  date_creation: string;
  date_modification: string;
  user_id: number;
  category_id: number;
  artisan_id: number;
  created_at: string;
  updated_at: string;
}

export const AfficherArticle: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const [data, setData] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);

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

        setData(response.data.articles.data);
        console.log(response.data.articles.data);
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
    fetchData();

    return () => {
      console.log("Composant démonté");
    };
  }, [token]);

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`${apiUrl}/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      setData(response.data.articles.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
        toast.error("Les informations fournies sont incorrectes. Veuillez les vérifier, puis réessayer");
      } else {
        toast.error(`Erreur inconnue: ${error}`);
        console.error("Erreur inconnue:", error);
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
          {data.map((item) => {
            return (
              <ImageListItem key={item.id}>
                <img {...srcset(item.images_article, 250, 200)} alt={item.nom_article} loading="lazy" />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
                  }}
                  title={
                    <>
                      <Typography variant="caption" component="p">
                        {item.nom_article}{" "}
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
                      aria-label={`star ${item.nom_article}`}
                      onClick={() => handleDelete(item.id)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
          <ToastContainer />
        </ImageList>
      )}
      ;
    </>
  );
};

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     author: "@bkristastucchio"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     author: "@southside_customs"
//   }
// ];
