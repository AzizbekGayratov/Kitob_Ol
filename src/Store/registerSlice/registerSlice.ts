import { Storage } from "Services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState, registerType } from "./initialState";

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    getToken: (state: registerType, action: PayloadAction<registerType>) => {
      Storage.set("token", action.payload.token);
      return {
        ...state,
        token: Storage.get("token"),
      };
    },
    clearToken: (state: registerType) => {
      Storage.clear();
      return {
        ...state,
        token: null,
      };
    },
  },
});

export default registerSlice.reducer;
export const { clearToken, getToken } = registerSlice.actions;
