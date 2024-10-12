import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "",
  author: "",
  language: "",
  publisher: "",
  year: "",
};

const vacancyFilterSlice = createSlice({
  name: "vacancyFilter",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export default vacancyFilterSlice.reducer;
export const { setSearch } = vacancyFilterSlice.actions;
