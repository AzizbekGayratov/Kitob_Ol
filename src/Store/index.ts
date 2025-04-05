import { languageSlice } from "./languageSlice";
import { profileSlice } from "./profileSlice";
import { registerSlice } from "./registerSlice";
import {dropDownSlice} from "./dropDownSlice";
import { configureStore } from "@reduxjs/toolkit";
import { bookFilterSlice, vacancyFilterSlice, minMaxPriceSlice } from "./FilterSlice/index.ts";
import { paginationSlice } from "./paginationSlice/index.ts";

const reducer = {
  registerSlice,
  project: profileSlice,
  language: languageSlice,
  bookFilter: bookFilterSlice,
  VacancyFilter: vacancyFilterSlice,
  dropDown: dropDownSlice,
  paginationValue: paginationSlice,
  minMaxPrice: minMaxPriceSlice
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
