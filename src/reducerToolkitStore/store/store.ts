import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "reducerToolkitStore/features/user";
import { visibleSlice } from "reducerToolkitStore/features/visible";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    visible: visibleSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
