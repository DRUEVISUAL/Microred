import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../features/menu/menuSlice";
import feedsReducer from "../features/feeds/feedsSlice";
import feedReducer from "../features/feeds/feedSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    feeds: feedsReducer,
    feed: feedReducer,
  },
});
