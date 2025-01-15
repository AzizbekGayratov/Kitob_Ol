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
    publisherProfile: {
      id: "",
      name: "",
      email: "",
      phone_number: "",
      location: {
        city_id: "",
        district_id: "",
      },
      image_url: "",
      type: "",
      status: true||false,
    },
    isProfileUpdating: false,
  },
  reducers: {
    updateProfileData: (state, action) => {
      state.profile = action.payload;
    },
    updatePublisherProfile: (state, action) => {
      state.publisherProfile = action.payload;
    },
    setIsProfileUpdating: (state, action) => {
      state.isProfileUpdating = action.payload;
    },
  },
});

export default profileSlice.reducer;
export const { updateProfileData, updatePublisherProfile, setIsProfileUpdating } = profileSlice.actions;
