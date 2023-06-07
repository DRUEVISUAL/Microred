import React, { useEffect } from "react";
import RootLayout from "../layout/RootLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tile from "../components/Tile/Tile";
import { fetchTopPosts, getTopPosts } from "../features/feeds/topFeedSlice";
import { useDispatch, useSelector } from "react-redux";
import FeedPage from "../pages/feedPage";

const App = () => {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<FeedPage />} />
          <Route path="/best" element={<Tile />} />
          <Route path="/new" element={<Tile />} />
          <Route path="/hot" element={<Tile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
