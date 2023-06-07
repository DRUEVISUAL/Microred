import { createSlice } from "@reduxjs/toolkit";

const feedsSlice = createSlice({
  name: "feeds",
  initialState: ["Top", "Best", "New", "Hot"],
});

export default feedsSlice.reducer;
