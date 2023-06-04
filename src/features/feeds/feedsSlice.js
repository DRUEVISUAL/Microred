import { createSlice } from "@reduxjs/toolkit";

const feedsSlice = createSlice({
  name: "feeds",
  initialState: ["Best", "Hot", "New", "Top"],
});

export default feedsSlice.reducer;
