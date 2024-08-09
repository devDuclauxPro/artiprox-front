import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TListItem } from "types/types";

export interface IArtisan {
  id?: number;
  id_artisan?: number;
  nom: string;
  prenoms: string;
  sexe?: string;
  metier?: string;
  description?: string;
  pays?: string;
  ville?: string;
  adresse?: string;
  numero_telephone?: string;
  articles?: TListItem[];
  note?: {
    note?: number;
    artisan_id?: number;
  }[];
  notations?: {
    note?: number;
    artisan_id?: number;
  }[];
  email?: string;
  user?: IArtisan;
}

export type IRechArtisan = Partial<Pick<IArtisan, "metier" | "ville">>;

export interface ITtrouverArtisan {
  resultatArtisans?: IArtisan[];
  resultatUnSeulArtisans?: IArtisan;
  rechercheArtisan?: IRechArtisan;
}

const initialState: ITtrouverArtisan = {
  resultatArtisans: [],
  resultatUnSeulArtisans: {
    nom: "",
    prenoms: ""
  },
  rechercheArtisan: {
    metier: "",
    ville: ""
  }
};

export const trouverArtisanSlice = createSlice({
  name: "trouverArtisan",
  initialState,
  reducers: {
    setTrouverArtisan(state, action: PayloadAction<ITtrouverArtisan>) {
      // Mise à jour des artisans
      state.resultatArtisans = action.payload.resultatArtisans || [];

      // Mise à jour de la recherche
      state.rechercheArtisan = { ...state.rechercheArtisan, ...action.payload.rechercheArtisan };

      // Mise à jour d'un seul artisan
      if (action.payload.resultatUnSeulArtisans) {
        state.resultatUnSeulArtisans = {
          ...state.resultatUnSeulArtisans,
          ...action.payload.resultatUnSeulArtisans
        };
      }
    }
  }
});

// Exportation des actions pour être utilisées dans les composants
export const { setTrouverArtisan } = trouverArtisanSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default trouverArtisanSlice.reducer;
