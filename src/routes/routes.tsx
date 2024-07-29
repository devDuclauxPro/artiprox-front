import { App } from "App";
import { OublierMotPasse } from "components/connexion/oublierMotPasse";
import { Accueil } from "pages/accueil";
import { Admin } from "pages/admin";
import { Artisan } from "pages/artisan";
import { AuthAdmin } from "pages/authAdmin";
import { Connexion } from "pages/connexion";
import { DetailArtisan } from "pages/detailArtisan";
import { Devis } from "pages/devis";
import { ErrorPage } from "pages/errorPage";
import { Inscription } from "pages/inscription";
import { Private } from "pages/private";
import { Public } from "pages/public";
import { QuiSommesNous } from "pages/quiSommesNous";
import { RendezVous } from "pages/rendezVous";
import { Utilisateur } from "pages/utilisateur";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Création des éléments de route
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<Public />}>
      <Route index element={<Accueil />} />
      <Route path="trouver-un-artisan" element={<Artisan />} />
      <Route path="trouver-un-artisan/:id" element={<DetailArtisan />} />
      <Route path="qui-sommes-nous" element={<QuiSommesNous />} />
    </Route>
    <Route path="espace-membre" element={<Private />}>
      <Route index element={<Utilisateur />} />
      <Route path="obtenir-un-devis" element={<Devis />} />
      <Route path="obtenir-un-rendez-vous" element={<RendezVous />} />
      <Route path="admin" element={<AuthAdmin />}>
        <Route index element={<Admin />} />
      </Route>
    </Route>
    <Route path="connexion" element={<Connexion />} />
    <Route path="inscription" element={<Inscription />} />
    <Route path="mot-passe-oublie" element={<OublierMotPasse />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

// Création du routeur
export const router = createBrowserRouter(routes);
