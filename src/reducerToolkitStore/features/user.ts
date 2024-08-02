import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Maybe } from "yup";

interface User {
  id: string;
  // profil: "Admin" | "Client" | "Artisan";
  role_id: 1 | 2 | 3; //"Admin" | "Client" | "Artisan";
  nom: string;
  prenoms: string;
  metier?: Maybe<string | undefined>;
  description?: Maybe<string | undefined>;
  pays: string;
  ville: string;
  adresse: string;
  numero_telephone: string;
  email: string;
  password: string;
  confPassword: string;
}

interface UserState {
  user: User | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  token: null
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

    deconnexion(state) {
      // localStorage.removeItem("user");
      localStorage.clear();
      state.user = null;
      state.token = null;
    }
  }
});

export const { connexion, deconnexion } = userSlice.actions;
export default userSlice.reducer;
