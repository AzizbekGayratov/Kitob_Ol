import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "project",
  initialState: {
    profile: {
      date_of_birth: "",
      email: "",
      first_name: "",
      id: "",
      image_url:
        "https://images.axadjonovsardorbek.uz/kitobol/annoymouse_user.jpg",
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
