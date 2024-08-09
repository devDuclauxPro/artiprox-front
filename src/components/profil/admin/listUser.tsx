import { Box, Grid, Typography } from "@mui/material";
import { LoadingIndicator } from "animations/threeDots";
import { configureAxiosHeaders } from "App";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { allUsers } from "reducerToolkitStore/features/user";
import { RootState } from "reducerToolkitStore/store/store";
import { colorBlack, colorBlue } from "utils/color";
import { apiUrl } from "utils/config";
import { ListTable, RowData } from "./tableListUser";

export const ListUser: FC = () => {
  const { token, users } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`, configureAxiosHeaders(token ?? ""));
        dispatch(allUsers({ users: response.data.users }));
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
    setLoading(true);
    fetchData();
    return () => {
      console.log("Composant démonté");
    };
  }, [token, dispatch]);

  return (
    <Box width="100%">
      <Grid container>
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
              <Typography variant="button" color={colorBlack} component="h1" textAlign="center">
                Liste des utilisateurs
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ListTable rows={users as RowData[]} />
            </Grid>
          </>
        )}
      </Grid>
      <ToastContainer />
    </Box>
  );
};
