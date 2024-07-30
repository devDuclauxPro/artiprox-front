import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { colorBlack } from "utils/color";
import { ListRepartition } from "./listRepartition";
import { ListTable } from "./tableListUser";

export const ListUser: FC = () => {
  const listProfil = [
    { id: 0, value: 100, label: "Clients" },
    { id: 1, value: 15, label: "Artisans" }
  ];
  const listAtivite = [
    { id: 0, value: 100, label: "Mecanicien" },
    { id: 1, value: 53, label: "Plombier" },
    { id: 2, value: 15, label: "Couturier" },
    { id: 3, value: 69, label: "Tapissier" }
  ];
  const listPays = [
    { id: 0, value: 85, label: "Côte d'Ivoire" },
    { id: 1, value: 53, label: "Sénegal" },
    { id: 2, value: 150, label: "Mali" },
    { id: 3, value: 69, label: "Benin" }
  ];
  const listVille = [
    { id: 0, value: 69, label: "Abidjan" },
    { id: 1, value: 53, label: "Bouaké" },
    { id: 2, value: 15, label: "Man" },
    { id: 3, value: 100, label: "Bongouanou" }
  ];
  return (
    <Box width="100%">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="button" color={colorBlack} component="h1" textAlign="center">
            Liste des utilisateurs
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ListTable />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="p" textAlign="center" py={2}>
            Repartition des utilisateurs
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ListRepartition listUsers={listProfil} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListRepartition listUsers={listAtivite} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListRepartition listUsers={listPays} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListRepartition listUsers={listVille} />
        </Grid>
      </Grid>
    </Box>
  );
};
