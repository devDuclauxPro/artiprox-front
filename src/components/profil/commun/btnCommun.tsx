import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deconnexion } from "reducerToolkitStore/features/user";
import {
  setArticleCategorie,
  setArticleVisible,
  setHistVisible,
  setPassModVisible,
  setProfilModVisible,
  setRoleVisible,
  setUserVisible
} from "reducerToolkitStore/features/visible";
import { RootState } from "reducerToolkitStore/store/store";

const ROLE_ADMIN = 1;
const ROLE_USER = 2;
const ROLE_ARTISAN = 3;

export const BtnCommun = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeconnexion = () => {
    dispatch(deconnexion());
    navigate("/connexion");
  };

  const setVisibilities = (visibilities: Record<string, boolean>) => {
    dispatch(setProfilModVisible({ visibleProfilModif: visibilities.profilMod }));
    dispatch(setPassModVisible({ visiblePassModif: visibilities.passMod }));
    dispatch(setUserVisible({ visibleUser: visibilities.user }));
    dispatch(setHistVisible({ visibleHistorique: visibilities.hist }));
    dispatch(setArticleVisible({ visibleArticle: visibilities.article }));
    dispatch(setArticleCategorie({ visibleCategorie: visibilities.articleCat }));
    dispatch(setRoleVisible({ visibleRole: visibilities.role }));
  };

  const handleProfilModVisible = () =>
    setVisibilities({
      profilMod: true,
      passMod: false,
      user: false,
      hist: false,
      article: false,
      articleCat: false,
      role: false
    });

  const handlePassModVisible = () =>
    setVisibilities({
      profilMod: false,
      passMod: true,
      user: false,
      hist: false,
      article: false,
      articleCat: false,
      role: false
    });

  const handleUserVisible = () =>
    setVisibilities({
      profilMod: false,
      passMod: false,
      user: true,
      hist: false,
      article: false,
      articleCat: false,
      role: false
    });

  const handleHistorique = () =>
    setVisibilities({
      profilMod: false,
      passMod: false,
      user: false,
      hist: true,
      article: false,
      articleCat: false,
      role: false
    });

  const handleArticle = () =>
    setVisibilities({
      profilMod: false,
      passMod: false,
      user: false,
      hist: false,
      article: true,
      articleCat: false,
      role: false
    });

  const handleArticleCategorie = () =>
    setVisibilities({
      profilMod: false,
      passMod: false,
      user: false,
      hist: false,
      article: false,
      articleCat: true,
      role: false
    });

  const handleRoles = () =>
    setVisibilities({
      profilMod: false,
      passMod: false,
      user: false,
      hist: false,
      article: false,
      articleCat: false,
      role: true
    });

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
      {user?.role_id === ROLE_ADMIN && (
        <>
          <Button variant="contained" color="warning" onClick={handleUserVisible}>
            Voir les utilisateurs
          </Button>
          <Button variant="contained" color="warning" onClick={handleRoles}>
            Ajouter les rôles
          </Button>
        </>
      )}
      {user?.role_id === ROLE_USER && (
        <Button variant="contained" onClick={handleHistorique}>
          Mon historique
        </Button>
      )}
      {user?.role_id === ROLE_ARTISAN && (
        <>
          <Button variant="contained" color="secondary" onClick={handleHistorique}>
            Mon historique
          </Button>
          <Button variant="contained" color="secondary" onClick={handleArticle}>
            Ajouter des articles
          </Button>
          <Button variant="contained" color="secondary" onClick={handleArticleCategorie}>
            Ajouter des catégories d'articles
          </Button>
        </>
      )}
    </Box>
  );
};
