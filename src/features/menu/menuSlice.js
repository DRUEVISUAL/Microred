import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    menuToggle: (state) => {
      if (state) {
        return !state;
      } else {
        return !state;
      }
    },
  },
});

export const { menuToggle } = menuSlice.actions;
export default menuSlice.reducer;
