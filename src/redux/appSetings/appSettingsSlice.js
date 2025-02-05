import { createSlice } from "@reduxjs/toolkit";
import en from "../../shared/constants/languages/en.json";
import zh from "../../shared/constants/languages/zh.json";
import ms from "../../shared/constants/languages/ms.json";

const languageMap = { en, zh, ms };
const savedLanguage = localStorage.getItem("language") || "en";

export const settingSlice = createSlice({
  name: "settings",
  initialState: {
    selectedLanguage: savedLanguage,
    translations: languageMap[savedLanguage],
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
      localStorage.setItem("language", action.payload);
      state.translations = languageMap[action.payload];
    },
  },
});

export const { changeLanguage } = settingSlice.actions;
export default settingSlice.reducer;
