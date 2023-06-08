import React, { useEffect } from "react";
import { fetchPosts } from "../features/feeds/feedSlice";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../components/Tile/Tile";
import TileSkeleton from "../components/Tile/TileSkeleton";

const FeedPage = () => {
  // declaring variable to hold the dispatch function
  const dispatch = useDispatch();

  // Selecting top posts from the redux store
  const posts = useSelector((state) => state.feed.posts);
  window.posts = posts;

  // Checking the status of the response
  const isLoading = useSelector((state) => state.feed.isLoading);

  // Dispatching fetchPosts thunk to fetch the reddit feed based on the page location
  useEffect(() => {
    dispatch(fetchPosts(window.location.pathname.slice(1)));
  }, []);

  // Retrurning the tiles from the store after successful fetch
  function returnTiles() {
    return posts.map((post, index) => {
      return <Tile key={index} post={post.data} />;
    });
  }
  //
  return (
    <main className="absolute right-0 top-14 mx-auto w-full pt-2 xs:px-2 sm:px-4 md:px-8 md:pt-4 lg:top-0 lg:w-[calc(100vw-320px)] lg:px-16 lg:pt-8">
      {isLoading ? <TileSkeleton /> : returnTiles()}
    </main>
  );
};

export default FeedPage;
