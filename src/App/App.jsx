import React from "react";
import RootLayout from "../layout/RootLayout";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import FeedPage from "../pages/FeedPage";

////////////////////////////////////////////////////////////////////////////////

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="top" element={<FeedPage />} />
      <Route path="best" element={<FeedPage />} />
      <Route path="new" element={<FeedPage />} />
      <Route path="hot" element={<FeedPage />} />
      <Route path="r/:subreddit" element={<FeedPage />} />
    </Route>
  )
);

////////////////////////////////////////////////////////////////////////////////

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
