import { PieChart } from "@mui/x-charts/PieChart";
import { FC } from "react";

type TListUsers = {
  listUsers: any;
};
export const ListRepartition: FC<TListUsers> = ({ listUsers }) => {
  return <PieChart series={[{ data: listUsers }]} width={400} height={200} />;
};
