import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { connexion } from "reducerToolkitStore/features/user";

// Composant principal de l'application
export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    dispatch(connexion(user));
  }, [dispatch]);

  return <Outlet />;
};
