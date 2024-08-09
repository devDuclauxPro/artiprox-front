import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDevisRdv {
  id?: string;
  nom?: string;
  prenoms?: string;
  date?: string;
  sexe?: string;
  metier?: string;
  description?: string;
  pays?: string;
  ville?: string;
  adresse?: string;
  numero_telephone?: string;
  email?: string;
  payment?: string;
}

interface IDevisRdvState {
  devis?: IDevisRdv;
}

const initialState: IDevisRdvState = {
  devis: undefined
};

export const devisRdvSlice = createSlice({
  name: "devisRdv",
  initialState,
  reducers: {
    setDevisRDV(state, action: PayloadAction<{ devis?: IDevisRdv }>) {
      state.devis = action.payload.devis;
    }
  }
});

// Exportation des actions pour être utilisées dans les composants
export const { setDevisRDV } = devisRdvSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default devisRdvSlice.reducer;
