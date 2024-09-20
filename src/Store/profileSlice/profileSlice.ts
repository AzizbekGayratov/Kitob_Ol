import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "project",
  initialState: {
    profile: {
      name: "John",
      lastName: "Doe",
      birthDate: "01.02.2009",
      phone: "+998901234567",
      email: "qHl6t@example.com",
      gender: "Erkak",
      avatar: "https://picsum.photos/120/120",
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
