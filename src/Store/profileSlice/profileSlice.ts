import { createSlice } from "@reduxjs/toolkit";
import { AnnoymouseUser } from "assets/images/jpg";

const profileSlice = createSlice({
  name: "project",
  initialState: {
    profile: {
      date_of_birth: "",
      email: "",
      first_name: "",
      id: "",
      image_url: AnnoymouseUser || "",
      last_name: "",
      phone_number: "+998",
      role: "",
    },
    isProfileUpdating: false,
  },
  reducers: {
    updateProfileData: (state, action) => {
      state.profile = action.payload;
    },
    setIsProfileUpdating: (state, action) => {
      state.isProfileUpdating = action.payload;
    },
  },
});

export default profileSlice.reducer;
export const { updateProfileData, setIsProfileUpdating } = profileSlice.actions;
