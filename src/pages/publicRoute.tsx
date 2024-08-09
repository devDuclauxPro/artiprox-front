import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "reducerToolkitStore/store/store";

export const PublicRoute: FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return user?.role_id ? <Navigate to="/" /> : <Outlet />;
};
