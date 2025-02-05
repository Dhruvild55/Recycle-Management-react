import { configureStore } from "@reduxjs/toolkit";
import settingReducers from "../redux/appSetings/appSettingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingReducers,
  },
});
