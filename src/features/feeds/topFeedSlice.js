import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../../api/reddit";

export const fetchTopPosts = createAsyncThunk(
  "topFeed/fetchTopPosts",
  async (feed, thunkAPI) => {
    const response = await Reddit.fetchFeedPosts("top");
    return response.data;
  }
);

const topFeedSlice = createSlice({
  name: "topFeed",
  initialState: {
    topPosts: [],
    after: null,
    before: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    addTopPosts: (state, action) => {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopPosts.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchTopPosts.fulfilled, (state, action) => {
        state.topPosts = action.payload.children;
        state.after = action.payload.after;
        state.before = action.payload.before;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchTopPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const getTopPosts = (state) => state.topPosts;

export const { addTopPosts } = topFeedSlice.actions;

export default topFeedSlice.reducer;
