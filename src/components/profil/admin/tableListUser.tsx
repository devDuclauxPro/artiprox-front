import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";

// Typage des données des lignes
export interface RowData {
  id: number;
  nom?: string;
  prenoms?: string;
  role_id?: string;
  pays?: string;
  ville?: string;
  adresse?: string;
  numero_telephone?: string;
  email?: string;
}

const columns: GridColDef<RowData>[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 130 },
  { field: "prenoms", headerName: "Prénoms", width: 130 },
  { field: "role_id", headerName: "Profil", width: 130 },
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
      <Chip label="Supprimer" onDelete={() => console.log(params)} deleteIcon={<DeleteIcon />} variant="outlined" />
    )
  }
];

export const ListTable: FC<{ rows: RowData[] }> = ({ rows }) => {
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
    </div>
  );
};
