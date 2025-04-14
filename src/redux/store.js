import { configureStore } from "@reduxjs/toolkit";
import settingReducers from "../redux/appSetings/appSettingsSlice";
import userReducers from "../redux/userData/userDataSlice";
import permissionsReducers from "../redux/userPermissions/userPermissionSlice";

export const store = configureStore({
  reducer: {
    settings: settingReducers,
    userData: userReducers,
    parmissions: permissionsReducers,
  },
});
