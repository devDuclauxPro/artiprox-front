import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "reducerToolkitStore/features/articles";
import { articleCategorieSlice } from "reducerToolkitStore/features/categories";
import { devisRdvSlice } from "reducerToolkitStore/features/devisRdv";
import { usersRoleSlice } from "reducerToolkitStore/features/roles";
import { trouverArtisanSlice } from "reducerToolkitStore/features/trouverArtisan";
import { userSlice } from "reducerToolkitStore/features/user";
import { visibleSlice } from "reducerToolkitStore/features/visible";

// Configuration du store Redux pour l'application
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    visible: visibleSlice.reducer,
    trouverArtisan: trouverArtisanSlice.reducer,
    articles: articleSlice.reducer,
    articleCategorie: articleCategorieSlice.reducer,
    rolesUserCon: usersRoleSlice.reducer,
    devisRdv: devisRdvSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
