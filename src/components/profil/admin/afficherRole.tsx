import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { allUsersRoleConnect } from "reducerToolkitStore/features/roles";
import { RootState } from "reducerToolkitStore/store/store";
import { colorRougeVif } from "utils/color";
import { apiUrl } from "utils/config";

export const AfficherRole: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const { roleUserConnect } = useSelector((state: RootState) => state.rolesUserCon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/roles`, configureAxiosHeaders(token ?? ""));
        dispatch(allUsersRoleConnect({ roleUserConnect: response.data.roles.data }));
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
      await axios.delete(`${apiUrl}/roles/delete/${id}`, configureAxiosHeaders(token ?? ""));
      const response = await axios.get(`${apiUrl}/roles`, configureAxiosHeaders(token ?? ""));
      dispatch(allUsersRoleConnect({ roleUserConnect: response.data.roles.data }));
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
          {roleUserConnect?.map((item) => (
            <ListItem
              key={item.updated_at}
              disableGutters
              secondaryAction={
                <IconButton
                  sx={{ color: colorRougeVif }}
                  aria-label={`supprimer ${item.nom_role}`}
                  onClick={() => handleDelete(parseInt(item.id_role))}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              }
            >
              <ListItemText primary={item.nom_role} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
