import { createSlice } from "@reduxjs/toolkit";
import { languagesType } from "modules/Announcements/types/Types";

const defaultLanguage = "uz" as languagesType;
const storedLanguage = localStorage.getItem("language") as languagesType;

if (!storedLanguage) {
  localStorage.setItem("language", defaultLanguage);
}

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: storedLanguage || defaultLanguage,
  },
  reducers: {
    selectLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default languageSlice.reducer;
export const { selectLanguage } = languageSlice.actions;
