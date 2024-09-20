import { profileSlice } from "./profileSlice";
import { registerSlice } from "./registerSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { registerSlice, project: profileSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
