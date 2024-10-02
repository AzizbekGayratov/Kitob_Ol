import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DropDownType } from "modules/Announcements/types/Types";

const initialState = {
  selected: "" as DropDownType | "",
};

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    toggleDropDown: (state, action: PayloadAction<DropDownType>) => {
      state.selected = state.selected === action.payload ? "" : action.payload;
    },
  },
});

export default dropDownSlice.reducer;
export const { toggleDropDown } = dropDownSlice.actions;
