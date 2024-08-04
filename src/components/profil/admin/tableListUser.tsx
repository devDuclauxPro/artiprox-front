import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from "@mui/x-data-grid";
import axios from "axios";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast, ToastContainer } from "react-toastify";
import { allUsers } from "reducerToolkitStore/features/user";
import { RootState } from "reducerToolkitStore/store/store";
import { apiUrl } from "utils/config";

// Typage des données des lignes
export interface RowData {
  id: number;
  nom?: string;
  prenoms?: string;
  role_id?: number;
  pays?: string;
  ville?: string;
  adresse?: string;
  numero_telephone?: string;
  email?: string;
}

export const ListTable: FC<{ rows: RowData[] }> = ({ rows }) => {
  const columns: GridColDef<RowData>[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nom", headerName: "Nom", width: 130 },
    { field: "prenoms", headerName: "Prénoms", width: 130 },
    {
      field: "role_id",
      headerName: "Profil",
      width: 130
    },
    { field: "pays", headerName: "Pays", width: 160 },
    { field: "ville", headerName: "Ville", width: 160 },
    { field: "adresse", headerName: "Adresse", width: 160 },
    { field: "numero_telephone", headerName: "Numéro", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    {
      field: "action",
      type: "actions",
      width: 180,
      renderCell: (params) => (
        <Chip
          label="Supprimer"
          onDelete={() => {
            deleteUser(params);
          }}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      )
    }
  ];

  const { token } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const deleteUser = async (params: GridRenderCellParams<RowData, any, any, GridTreeNodeWithRender>) => {
    if (!apiUrl) {
      toast.error("L'URL de l'API est manquante dans les variables d'environnement.");
      return;
    }

    try {
      await axios.delete(`${apiUrl}/user/delete/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      const response = await axios.get(`${apiUrl}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      dispatch(
        allUsers({
          users: response.data.users
        })
      );

      toast.success("Suppresssion réussie !");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Une erreur est survenue.";
        toast.error(`${errorMessage}`);
      } else {
        toast.error("Une erreur inconnue est survenue.");
      }
    }
  };

  return (
    <div style={{ height: 600 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 }
          }
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
      <ToastContainer />
    </div>
  );
};
