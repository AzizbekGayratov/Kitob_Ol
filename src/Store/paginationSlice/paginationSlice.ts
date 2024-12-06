import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    itemsPerPage: 12,
    totalItems: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setPage, setTotalItems } =
  paginationSlice.actions;
export default paginationSlice.reducer;
