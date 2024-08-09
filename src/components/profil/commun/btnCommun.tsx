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

  // Fonction pour définir les visibilités des différents éléments
  const setVisibilities = (visibilities: Partial<Record<string, boolean>>) => {
    dispatch(setProfilModVisible({ visibleProfilModif: visibilities.profilMod ?? false }));
    dispatch(setPassModVisible({ visiblePassModif: visibilities.passMod ?? false }));
    dispatch(setUserVisible({ visibleUser: visibilities.user ?? false }));
    dispatch(setHistVisible({ visibleHistorique: visibilities.hist ?? false }));
    dispatch(setArticleVisible({ visibleArticle: visibilities.article ?? false }));
    dispatch(setArticleCategorie({ visibleCategorie: visibilities.articleCat ?? false }));
    dispatch(setRoleVisible({ visibleRole: visibilities.role ?? false }));
  };

  // Fonctions pour gérer la visibilité des différentes sections
  const handleVisibilityChange = (section: string) => () => {
    setVisibilities({
      profilMod: section === "profilMod",
      passMod: section === "passMod",
      user: section === "user",
      hist: section === "hist",
      article: section === "article",
      articleCat: section === "articleCat",
      role: section === "role"
    });
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" gap={1}>
      {user?.role_id && (
        <>
          <Button variant="contained" color="error" onClick={handleDeconnexion}>
            Se déconnecter
          </Button>
          <Button variant="contained" color="info" onClick={handleVisibilityChange("profilMod")}>
            Modifier mon profil
          </Button>
          <Button variant="contained" color="info" onClick={handleVisibilityChange("passMod")}>
            Modifier mon mot de passe
          </Button>
        </>
      )}
      {user?.role_id === ROLE_ADMIN && (
        <>
          <Button variant="contained" color="warning" onClick={handleVisibilityChange("user")}>
            Voir les utilisateurs
          </Button>
          <Button variant="contained" color="warning" onClick={handleVisibilityChange("role")}>
            Ajouter les rôles
          </Button>
        </>
      )}
      {user?.role_id === ROLE_USER && (
        <Button variant="contained" onClick={handleVisibilityChange("hist")}>
          Mon historique
        </Button>
      )}
      {user?.role_id === ROLE_ARTISAN && (
        <>
          <Button variant="contained" color="secondary" onClick={handleVisibilityChange("hist")}>
            Mon historique
          </Button>
          <Button variant="contained" color="secondary" onClick={handleVisibilityChange("article")}>
            Ajouter des articles
          </Button>
          <Button variant="contained" color="secondary" onClick={handleVisibilityChange("articleCat")}>
            Ajouter des catégories d'articles
          </Button>
        </>
      )}
    </Box>
  );
};
