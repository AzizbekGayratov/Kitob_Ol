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
        "https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
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
