import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
  "searchSlice/fetchSearch",
  async (community, thunkAPI) => {
    const data = await fetch(
      `https://www.reddit.com/search.json?q=${community}&type=sr`
    );
    const response = await data.json();
    return response.data.children;
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    results: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    removeResults: (state, action) => {
      state.results = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
      state.error = false;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { removeResults } = searchSlice.actions;

export default searchSlice.reducer;
