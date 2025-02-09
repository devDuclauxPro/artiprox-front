import axios from "axios";
import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { connexion, deconnexion } from "reducerToolkitStore/features/user";
import { RootState } from "reducerToolkitStore/store/store";
import { apiUrl } from "utils/config";

// Typage de la fonction pour récupérer l'utilisateur du localStorage
type User = {
  token?: string;
  user_info?: any;
};

const getUserFromLocalStorage = (): User => JSON.parse(localStorage.getItem("user") || "{}");

export const configureAxiosHeaders = (token: string) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});

export const App: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user.token) {
      dispatch(connexion(user));
    } else {
      navigate("/connexion");
    }
  }, [dispatch, navigate]);

  const fetchData = useCallback(async () => {
    if (!token) {
      navigate("/connexion");
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}/user`, configureAxiosHeaders(token));
      dispatch(connexion({ user: response.data.user_info, token }));
    } catch (error) {
      console.error(
        axios.isAxiosError(error)
          ? `Erreur Axios: ${error.response?.data?.error || error.message}`
          : `Erreur inconnue: ${error}`
      );
      dispatch(deconnexion());
      navigate("/connexion");
    }
  }, [token, navigate, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Outlet />;
};
