import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface IArticleState {
  articles?: IArticle[]; // Correction ici, articles ne devrait pas être optionnel
}

const initialState: IArticleState = {
  articles: [] // Correction ici
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    allArticles(state, action: PayloadAction<IArticleState>) {
      state.articles = action.payload.articles;
    }
  }
});

export const { allArticles } = articleSlice.actions;
export default articleSlice.reducer;
