import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../features/menu/menuSlice";
import feedsReducer from "../features/feeds/feedsSlice";
import topFeedReducer from "../features/feeds/topFeedSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    feeds: feedsReducer,
    topFeed: topFeedReducer,
  },
});
