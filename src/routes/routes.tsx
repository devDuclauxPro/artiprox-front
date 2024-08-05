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
import { RendezVous } from "pages/rendezVous";
import { Utilisateur } from "pages/utilisateur";
import { createBrowserRouter } from "react-router-dom";

// Définir les chemins
const paths = {
  home: "",
  quiSommesNous: "qui-sommes-nous",
  trouverArtisan: "trouver-un-artisan",
  detailArtisan: "trouver-un-artisan/:id",
  connexion: "connexion",
  inscription: "inscription",
  oublierMotPasse: "mot-passe-oublie",
  espaceMembre: "espace-membre",
  profil: "profil",
  devis: "obtenir-un-devis",
  rendezVous: "obtenir-un-rendez-vous",
  admin: "admin"
};

// Définir les routes publiques accessibles à tous les utilisateurs
const routesForPublic = [
  { path: paths.home, element: <Accueil /> },
  { path: paths.trouverArtisan, element: <Artisan /> },
  { path: paths.detailArtisan, element: <DetailArtisan /> },
  { path: paths.connexion, element: <Connexion /> },
  { path: paths.inscription, element: <Inscription /> },
  { path: paths.oublierMotPasse, element: <OublierMotPasse /> }
];

// Définir les routes accessibles uniquement aux utilisateurs authentifiés
const routesForAuthenticatedOnly = [
  {
    path: paths.espaceMembre,
    element: <PrivateRoute />,
    children: [
      { path: paths.home, element: <Accueil /> },
      { path: paths.trouverArtisan, element: <Artisan /> },
      { path: paths.detailArtisan, element: <DetailArtisan /> },
      { path: paths.profil, element: <Utilisateur /> },
      { path: paths.devis, element: <Devis /> },
      { path: paths.rendezVous, element: <RendezVous /> }
    ]
  }
];

// Définir les routes accessibles uniquement aux utilisateurs non authentifiés
const routesForNotAuthenticatedOnly = [{ path: paths.home, element: <Accueil /> }];

// Combiner et inclure conditionnellement les routes en fonction du statut d'authentification
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: paths.home,
        element: <PublicRoute />,
        children: [...routesForPublic]
      },
      ...routesForAuthenticatedOnly,
      { path: "*", element: <ErrorPage /> }
    ]
  },
  ...routesForNotAuthenticatedOnly
]);
