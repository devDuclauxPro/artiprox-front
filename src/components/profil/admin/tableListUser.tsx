import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";

// Typage des données des lignes
interface RowData {
  id: number;
  nom?: string;
  prenoms?: string;
  profil?: string;
  pays?: string;
  ville?: string;
  adresse?: string;
  numero?: string;
  email?: string;
}

const columns: GridColDef<RowData>[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 130 },
  { field: "prenoms", headerName: "Prénoms", width: 130 },
  { field: "profil", headerName: "Profil", width: 130 },
  { field: "pays", headerName: "Pays", width: 160 },
  { field: "ville", headerName: "Ville", width: 160 },
  { field: "adresse", headerName: "Adresse", width: 160 },
  { field: "numero", headerName: "Numéro", width: 160 },
  { field: "email", headerName: "Email", width: 160 },
  {
    field: "togglePopper",
    type: "actions",
    width: 180,
    renderCell: (params) => (
      <Chip label="Supprimer" onDelete={() => console.log(params)} deleteIcon={<DeleteIcon />} variant="outlined" />
    )
  }
];

const rows: RowData[] = [
  {
    id: 1,
    nom: "Snow",
    prenoms: "Jon",
    profil: "Artisan",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 2,
    nom: "Lannister",
    prenoms: "Cersei",
    profil: "Artisan",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 3,
    nom: "Lannister",
    prenoms: "Jaime",
    profil: "Client",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 4,
    nom: "Stark",
    prenoms: "Arya",
    profil: "Client",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 5,
    nom: "Targaryen",
    prenoms: "Daenerys",
    profil: "Artisan",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 6,
    nom: "Melisandre",
    prenoms: "Ange",
    profil: "Client",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 7,
    nom: "Clifford",
    prenoms: "Ferrara",
    profil: "Artisan",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 8,
    nom: "Frances",
    prenoms: "Rossini",
    profil: "Artisan",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  },
  {
    id: 9,
    nom: "Roxie",
    prenoms: "Harvey",
    profil: "Client",
    numero: "07070707070",
    email: "exemple@gmail.com",
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    adresse: "Cocody - Danga"
  }
];

export const ListTable: FC = () => {
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
        pageSizeOptions={[0, 9]}
        checkboxSelection
      />
    </div>
  );
};
