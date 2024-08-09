import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRole {
  id_role: string;
  nom_role: string;
  created_at: string;
  updated_at: string;
}

interface IRoleState {
  roleUserConnect?: IRole[];
}

const initialState: IRoleState = {
  roleUserConnect: []
};

export const usersRoleSlice = createSlice({
  name: "rolesUser",
  initialState,
  reducers: {
    allUsersRoleConnect(state, action: PayloadAction<IRoleState>) {
      state.roleUserConnect = action.payload.roleUserConnect;
    }
  }
});

// Exportation des actions pour être utilisées dans les composants
export const { allUsersRoleConnect } = usersRoleSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default usersRoleSlice.reducer;
