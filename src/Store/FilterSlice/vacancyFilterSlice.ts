import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vacancy_title: "",
  working_styles: "",
  working_types: "",
  salary_from: "",
  salary_to: "",
  status: "",
  publisher_id: "",
  city_id: "",
  district_id: "",
  limit: "",
  offset: "",
};

const vacancyFilterSlice = createSlice({
  name: "vacancyFilter",
  initialState,
  reducers: {
    setSearch(state, action) {
      state = { ...action.payload };
    },
  },
});

export default vacancyFilterSlice.reducer;
export const { setSearch } = vacancyFilterSlice.actions;
