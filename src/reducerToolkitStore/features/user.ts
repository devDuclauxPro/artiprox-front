import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RowData } from "components/profil/admin/tableListUser";

interface User {
  id: string;
  // profil: "Admin" | "Client" | "Artisan";
  role_id: 1 | 2 | 3; //"Admin" | "Client" | "Artisan";
  nom: string;
  prenoms: string;
  sexe?: string;
  metier?: string;
  description?: string;
  pays: string;
  ville: string;
  adresse: string;
  numero_telephone: string;
  email: string;
  password: string;
  confPassword: string;
}

interface UserState {
  user?: User | null;
  token?: string | null;
  users?: RowData[];
}

const initialState: UserState = {
  user: null,
  token: null,
  users: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connexion(state, action: PayloadAction<UserState>) {
      const { user, token } = action.payload;
      localStorage.setItem("user", JSON.stringify({ user, token }));
      state.user = user;
      state.token = token;
    },
    allUsers(state, action: PayloadAction<UserState>) {
      state.users = action.payload.users;
    },

    deconnexion(state) {
      localStorage.clear();
      state.user = null;
      state.token = null;
    }
  }
});

export const { connexion, deconnexion, allUsers } = userSlice.actions;
export default userSlice.reducer;
