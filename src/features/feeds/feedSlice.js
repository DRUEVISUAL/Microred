import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "feedSlice/fetchPosts",
  async (feed, thunkAPI) => {
    if (feed === "top" || feed === "best" || feed === "new" || feed === "hot") {
      const data = await fetch(`https://www.reddit.com/r/all/${feed}.json`);
      const response = await data.json();
      return response.data;
    } else if (feed.includes("r/")) {
      const data = await fetch(`https://www.reddit.com/${feed}.json`);
      const response = await data.json();
      return response.data;
    }
  }
);

export const fetchPostsBeforeAfter = createAsyncThunk(
  "feedSlice/fetchPostsBeforeAfter",
  async ({ feed, before, after }, thunkAPI) => {
    if (before) {
      const data = await fetch(
        `https://www.reddit.com/r/all/${feed}.json?before=${before}`
      );
      const response = await data.json();
      return response.data;
    } else if (after) {
      const data = await fetch(
        `https://www.reddit.com/r/all/${feed}.json?after=${after}`
      );
      const response = await data.json();
      return response.data;
    }
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
