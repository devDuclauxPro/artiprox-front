import { FC } from "react";
import { Outlet } from "react-router-dom";

// Composant principal de l'application
export const App: FC = () => {
  return <Outlet />;
};
