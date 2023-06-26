import { createSlice } from "@reduxjs/toolkit";

const navDesktopSlice = createSlice({
  name: "navDesktopSlice",
  initialState: false,
  reducers: {
    navToggle: (state, action) => {
      return action.payload;
    },
  },
});

export const { navToggle } = navDesktopSlice.actions;
export default navDesktopSlice.reducer;
