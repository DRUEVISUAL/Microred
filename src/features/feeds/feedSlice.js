import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../../api/reddit";

export const fetchPosts = createAsyncThunk(
  "feedSlice/fetchPosts",
  async (feed, thunkAPI) => {
    const response = await Reddit.fetchFeedPosts(feed);
    return response.data;
  }
);

const feedSlice = createSlice({
  name: "feedSlice",
  initialState: {
    posts: [],
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
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload.children;
        state.after = action.payload.after;
        state.before = action.payload.before;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { addTopPosts } = feedSlice.actions;

export default feedSlice.reducer;
