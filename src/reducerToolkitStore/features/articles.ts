import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface représentant un article
interface IArticle {
  id: number;
  nom_article: string;
  type_article: string;
  prix_article: string;
  images_article: string;
  date_creation: string;
  date_modification: string;
  user_id: number;
  category_id: number;
  artisan_id: number;
  created_at: string;
  updated_at: string;
}

// Interface représentant l'état des articles
interface IArticleState {
  articles?: IArticle[];
}

// État initial pour les articles
const initialState: IArticleState = {
  articles: []
};

// Création du slice Redux pour gérer les articless
export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    allArticles(state, action: PayloadAction<IArticleState>) {
      state.articles = action.payload.articles;
    }
  }
});

// Exportation des actions pour être utilisées dans les composants
export const { allArticles } = articleSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default articleSlice.reducer;
