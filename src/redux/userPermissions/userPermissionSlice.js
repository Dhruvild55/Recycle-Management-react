import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  permission: "permissions",
};

const permissionSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    setPermissions: (state, action) => {
      state.permission = action.payload;
    },
  },
});

export const { setPermissions } = permissionSlice.actions;

export default permissionSlice.reducer;
