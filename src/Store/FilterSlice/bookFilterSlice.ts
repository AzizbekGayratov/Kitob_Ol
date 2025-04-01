import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price_from: "0",
  price_to: "5000000",
  publisher_id: "",
  category_id: "",
  translator_id: "",
  author_id: "",
  language_id: "",
  city_id: "",
  district_id: "",
  title: "",
  writing_type: "",
  limit: "",
  offset: "",
};

const bookFilterSlice = createSlice({
  name: "bookFilter",
  initialState,
  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export default bookFilterSlice.reducer;
export const { setState } = bookFilterSlice.actions;
