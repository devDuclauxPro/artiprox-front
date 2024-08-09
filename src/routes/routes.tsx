import { App } from "App";
import { OublierMotPasse } from "components/connexion/oublierMotPasse";
import { Accueil } from "pages/accueil";
import { Artisan } from "pages/artisan";
import { Connexion } from "pages/connexion";
import { DetailArtisan } from "pages/detailArtisan";
import { Devis } from "pages/devis";
import { ErrorPage } from "pages/errorPage";
import { Inscription } from "pages/inscription";
import { PrivateRoute } from "pages/privateRoute";
import { PublicRoute } from "pages/publicRoute";
import { Utilisateur } from "pages/utilisateur";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Création des éléments de route
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route element={<PublicRoute />}>
      <Route path="connexion" element={<Connexion />} />
      <Route path="inscription" element={<Inscription />} />
      <Route path="mot-passe-oublie" element={<OublierMotPasse />} />
    </Route>

    <Route element={<PrivateRoute />}>
      <Route path="profil" element={<Utilisateur />} />
      <Route path="obtenir-un-devis/:id" element={<Devis />} />
    </Route>

    <Route index element={<Accueil />} />
    <Route path="trouver-un-artisan/:id" element={<DetailArtisan />} />
    <Route path="trouver-un-artisan" element={<Artisan />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

// Création du routeur
export const router = createBrowserRouter(routes);
