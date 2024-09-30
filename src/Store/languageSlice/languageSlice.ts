import { createSlice } from "@reduxjs/toolkit";

const defaultLanguage = "uz";
const storedLanguage = localStorage.getItem("language");

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
