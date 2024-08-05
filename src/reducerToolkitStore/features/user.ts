import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RowData } from "components/profil/admin/tableListUser";

interface IUser {
  id: string;
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

interface IUserState {
  user?: IUser;
  token?: string;
  users?: RowData[];
}

const initialState: IUserState = {
  user: undefined,
  token: undefined,
  users: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connexion(state, action: PayloadAction<IUserState>) {
      const { user, token } = action.payload;
      localStorage.setItem("user", JSON.stringify({ user, token }));
      state.user = user;
      state.token = token;
    },
    allUsers(state, action: PayloadAction<IUserState>) {
      state.users = action.payload.users;
    },

    deconnexion(state) {
      localStorage.clear();
      state.user = undefined;
      state.token = undefined;
    }
  }
});

export const { connexion, deconnexion, allUsers } = userSlice.actions;
export default userSlice.reducer;
