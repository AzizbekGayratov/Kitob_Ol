import { languageSlice } from "./languageSlice";
import { profileSlice } from "./profileSlice";
import { registerSlice } from "./registerSlice";
import { dropDownSlice } from "./dropDownSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  registerSlice,
  project: profileSlice,
  language: languageSlice,
  dropDown: dropDownSlice,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
