import { languageSlice } from "./languageSlice";
import { profileSlice } from "./profileSlice";
import { registerSlice } from "./registerSlice";
import {dropDownSlice} from "./dropDownSlice";
import { configureStore } from "@reduxjs/toolkit";
import { bookFilterSlice, vacancyFilterSlice } from "./FilterSlice/index.ts";
import { paginationSlice } from "./paginationSlice/index.ts";

const reducer = {
  registerSlice,
  project: profileSlice,
  language: languageSlice,
  bookFilter: bookFilterSlice,
  VacancyFilter: vacancyFilterSlice,
  dropDownValue: dropDownSlice,
  paginationValue: paginationSlice,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
