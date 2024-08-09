import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategorie {
  categorie_id: string;
  nom_categorie: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

interface ICategorieState {
  articlesCartegories?: ICategorie[];
}

const initialState: ICategorieState = {
  articlesCartegories: []
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

// Exportation des actions pour être utilisées dans les composants
export const { allArticlesCategorie } = articleCategorieSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default articleCategorieSlice.reducer;
