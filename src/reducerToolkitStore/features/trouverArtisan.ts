import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArtisan {
  id: string;
  nom: string;
  prenoms: string;
  sexe?: string;
  metier?: string;
  description?: string;
  pays: string;
  ville: string;
  adresse: string;
  numero_telephone: string;
  notation: number;
  email: string;
}

interface ITtrouverArtisan {
  resultatArtisans?: IArtisan[];
  rechercheArtisan?: {
    metier: string;
    ville: string;
  };
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
      state.rechercheArtisan = action.payload.rechercheArtisan;
    }
  }
});

export const { setTrouverArtisan } = trouverArtisanSlice.actions;
export default trouverArtisanSlice.reducer;
