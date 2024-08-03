import axios from "axios";
import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { connexion, deconnexion } from "reducerToolkitStore/features/user";
import { RootState } from "reducerToolkitStore/store/store";
import { apiUrl } from "utils/config";

// Composant principal de l'application
export const App: FC = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
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
      await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      navigate("/espace-membre");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios:", error.response?.data?.error || error.message);
      } else {
        console.error("Erreur inconnue:", error);
      }
      dispatch(deconnexion());
      navigate("/connexion");
    }
  }, [token, navigate, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Outlet />;
};
