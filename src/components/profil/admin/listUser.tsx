import { Box, Grid, Typography } from "@mui/material";
import { LoadingIndicator } from "animations/threeDots";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { allUsers } from "reducerToolkitStore/features/user";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlack, colorBlue } from "utils/color";
import { apiUrl } from "utils/config";
import { ListRepartition } from "./listRepartition";
import { ListTable, RowData } from "./tableListUser";

export const ListUser: FC = () => {
  const listProfil = [
    { id: 0, value: 100, label: "Clients" },
    { id: 1, value: 15, label: "Artisans" }
  ];
  const listActivite = [
    { id: 0, value: 100, label: "Mécanicien" },
    { id: 1, value: 53, label: "Plombier" },
    { id: 2, value: 15, label: "Couturier" },
    { id: 3, value: 69, label: "Tapissier" }
  ];
  const listPays = [
    { id: 0, value: 85, label: "Côte d'Ivoire" },
    { id: 1, value: 53, label: "Sénégal" },
    { id: 2, value: 150, label: "Mali" },
    { id: 3, value: 69, label: "Bénin" }
  ];
  const listVille = [
    { id: 0, value: 69, label: "Abidjan" },
    { id: 1, value: 53, label: "Bouaké" },
    { id: 2, value: 15, label: "Man" },
    { id: 3, value: 100, label: "Bongouanou" }
  ];

  const { token, users } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        dispatch(
          allUsers({
            users: response.data.users
          })
        ); // Assure-toi que 'users' est bien la clé correcte
        console.log(response.data);
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
  }, [token, dispatch]);

  return (
    <Box width="100%">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="button" color={colorBlack} component="h1" textAlign="center">
            Liste des utilisateurs
          </Typography>
        </Grid>
        {loading ? (
          <Grid item xs={12}>
            <LoadingIndicator />
            <Typography variant="caption" component="h1" color={colorBlue}>
              Veuillez patienter quelques secondes...
            </Typography>
          </Grid>
        ) : (
          <>
            <Grid item xs={12}>
              <ListTable rows={users as RowData[]} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="p" textAlign="center" py={2}>
                Répartition des utilisateurs
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <ListRepartition listUsers={listProfil} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ListRepartition listUsers={listActivite} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ListRepartition listUsers={listPays} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ListRepartition listUsers={listVille} />
            </Grid>
          </>
        )}
      </Grid>
      <ToastContainer />
    </Box>
  );
};
