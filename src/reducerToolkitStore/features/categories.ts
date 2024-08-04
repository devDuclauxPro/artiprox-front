import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategorie {
  categorie_id: string;
  nom_categorie: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

interface ICategorieState {
  articlesCartegories?: ICategorie[]; // Correction ici, articles ne devrait pas être optionnel
}

const initialState: ICategorieState = {
  articlesCartegories: [] // Correction ici
};

export const articleCategorieSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    allArticlesCategorie(state, action: PayloadAction<ICategorieState>) {
      state.articlesCartegories = action.payload.articlesCartegories;
    }
  }
});

export const { allArticlesCategorie } = articleCategorieSlice.actions;
export default articleCategorieSlice.reducer;
