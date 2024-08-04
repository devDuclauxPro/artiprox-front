import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "reducerToolkitStore/features/articles";
import { trouverArtisanSlice } from "reducerToolkitStore/features/trouverArtisan";
import { userSlice } from "reducerToolkitStore/features/user";
import { visibleSlice } from "reducerToolkitStore/features/visible";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    visible: visibleSlice.reducer,
    trouverArtisan: trouverArtisanSlice.reducer,
    articles: articleSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
