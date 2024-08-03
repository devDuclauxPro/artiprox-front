import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deconnexion } from "reducerToolkitStore/features/user";
import {
  setArticleVisible,
  setHistVisible,
  setPassModVisible,
  setProfilModVisible,
  setUserVisible
} from "reducerToolkitStore/features/visible";
import { RootState } from "reducerToolkitStore/store/store";

export const BtnCommun = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeconnexion = () => {
    dispatch(deconnexion());
    navigate("/connexion");
  };
  const handleProfilModVisible = () => {
    dispatch(setProfilModVisible({ visibleProfilModif: true }));
    dispatch(setPassModVisible({ visiblePassModif: false }));
    dispatch(setUserVisible({ visiblePassModif: false }));
    dispatch(setHistVisible({ visibleHistorique: false }));
    dispatch(setArticleVisible({ visibleArticle: false }));
  };
  const handlePassModVisible = () => {
    dispatch(setProfilModVisible({ visibleProfilModif: false }));
    dispatch(setUserVisible({ visiblePassModif: false }));
    dispatch(setPassModVisible({ visiblePassModif: true }));
    dispatch(setHistVisible({ visibleHistorique: false }));
    dispatch(setArticleVisible({ visibleArticle: false }));
  };
  const handleUserVisible = () => {
    dispatch(setUserVisible({ visibleUser: true }));
    dispatch(setProfilModVisible({ visibleProfilModif: false }));
    dispatch(setPassModVisible({ visiblePassModif: false }));
    dispatch(setHistVisible({ visibleHistorique: false }));
    dispatch(setArticleVisible({ visibleArticle: false }));
  };
  const handleHistorique = () => {
    dispatch(setHistVisible({ visibleHistorique: true }));
    dispatch(setUserVisible({ visibleUser: false }));
    dispatch(setProfilModVisible({ visibleProfilModif: false }));
    dispatch(setPassModVisible({ visiblePassModif: false }));
    dispatch(setArticleVisible({ visibleArticle: false }));
  };
  const handleArticle = () => {
    dispatch(setArticleVisible({ visibleArticle: true }));
    dispatch(setHistVisible({ visibleHistorique: false }));
    dispatch(setUserVisible({ visibleUser: false }));
    dispatch(setProfilModVisible({ visibleProfilModif: false }));
    dispatch(setPassModVisible({ visiblePassModif: false }));
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" gap={1}>
      {user?.role_id && (
        <>
          <Button variant="contained" color="error" onClick={handleDeconnexion}>
            Se déconnecter
          </Button>
          <Button variant="contained" color="info" onClick={handleProfilModVisible}>
            Modifier mon profil
          </Button>
          <Button variant="contained" color="info" onClick={handlePassModVisible}>
            Modifier mon mot de passe
          </Button>
        </>
      )}
      {user?.role_id === 1 && (
        <Button variant="contained" color="warning" onClick={handleUserVisible}>
          Voir les utilisateurs
        </Button>
      )}
      {user?.role_id === 2 && (
        <Button variant="contained" onClick={handleHistorique}>
          Mon historique
        </Button>
      )}
      {user?.role_id === 3 && (
        <>
          <Button variant="contained" color="secondary" onClick={handleHistorique}>
            Mon historique
          </Button>
          <Button variant="contained" color="secondary" onClick={handleArticle}>
            Ajouter des articles
          </Button>
        </>
      )}
    </Box>
  );
};
