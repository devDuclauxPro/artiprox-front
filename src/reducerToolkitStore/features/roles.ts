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

export const { allUsersRoleConnect } = usersRoleSlice.actions;
export default usersRoleSlice.reducer;
