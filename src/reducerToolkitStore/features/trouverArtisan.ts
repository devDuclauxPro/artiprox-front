import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IArtisan {
  id?: number;
  nom: string;
  prenoms: string;
  sexe?: string;
  metier?: string;
  description?: string;
  pays?: string;
  ville?: string;
  adresse?: string;
  numero_telephone?: string;
  notation?: number;
  email?: string;
}

export type IRechArtisan = Partial<Pick<IArtisan, "metier" | "ville">>;

interface ITtrouverArtisan {
  resultatArtisans: IArtisan[];
  rechercheArtisan: IRechArtisan;
}

const initialState: ITtrouverArtisan = {
  resultatArtisans: [],
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
      state.resultatArtisans = action.payload.resultatArtisans;
      state.rechercheArtisan = { ...state.rechercheArtisan, ...action.payload.rechercheArtisan };
    }
  }
});

export const { setTrouverArtisan } = trouverArtisanSlice.actions;
export default trouverArtisanSlice.reducer;
