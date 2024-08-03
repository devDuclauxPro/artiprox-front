import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IVisible {
  visibleProfilModif?: boolean;
  visiblePassModif?: boolean;
  visibleHistorique?: boolean;
  visibleUser?: boolean;
  visibleArticle?: boolean;
}

const initialState: IVisible = {
  visibleProfilModif: true,
  visiblePassModif: false,
  visibleHistorique: false,
  visibleUser: false,
  visibleArticle: false
};

export const visibleSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {
    setProfilModVisible(state, action: PayloadAction<IVisible>) {
      state.visibleProfilModif = action.payload.visibleProfilModif;
    },
    setPassModVisible(state, action: PayloadAction<IVisible>) {
      state.visiblePassModif = action.payload.visiblePassModif;
    },
    setHistVisible(state, action: PayloadAction<IVisible>) {
      state.visibleHistorique = action.payload.visibleHistorique;
    },
    setUserVisible(state, action: PayloadAction<IVisible>) {
      state.visibleUser = action.payload.visibleUser;
    },
    setArticleVisible(state, action: PayloadAction<IVisible>) {
      state.visibleArticle = action.payload.visibleArticle;
    }
  }
});

export const { setProfilModVisible, setHistVisible, setPassModVisible, setUserVisible, setArticleVisible } =
  visibleSlice.actions;
export default visibleSlice.reducer;
