import React, { useEffect, useState } from "react";
import { fetchPosts } from "../features/feeds/feedSlice";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../components/Tile/Tile";
import TileSkeleton from "../components/Tile/TileSkeleton";
import BackgroundRedBlur from "../components/BackgroundRedBlur";
import SubredditBannerElement from "../components/FeedPage/SubredditBannerElement";
import FlipPage from "../components/FeedPage/FlipPage";

////////////////////////////////////////////////////////////////////////////////

const FeedPage = () => {
  // URL path subreddit name with prefix (r/subreddit)
  const subreddit = window.location.pathname.slice(1);

  // Declaring variable to hold the dispatch function
  const dispatch = useDispatch();

  // Selecting top posts from the redux store
  const posts = useSelector((state) => state.feed.posts);

  // Checking the status of the response
  const isLoading = useSelector((state) => state.feed.isLoading);

  ////////////////////////////////////////////////////////////////////////////////

  // Retrurning the tiles from the store after successful fetch
  function returnTiles() {
    return posts.map((post, index) => {
      return <Tile key={index} post={post.data} />;
    });
  }

  // Dispatching fetchPosts thunk to fetch the reddit feed based on the page location
  useEffect(() => {
    dispatch(fetchPosts(subreddit));
  }, [window.location.pathname]);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <main className="absolute right-0 top-14 mx-auto h-full w-full py-2 xs:px-2 sm:px-4 md:px-8 md:py-4 lg:top-0 lg:w-[calc(100vw-320px)] lg:px-16 lg:py-8">
      {/*  */}
      {/* Subreddit profile picture and banner image */}
      {subreddit.includes("r/") ? (
        <SubredditBannerElement subreddit={subreddit} />
      ) : null}

      {/* Tiles for rendering */}
      {isLoading ? <TileSkeleton /> : returnTiles()}

      <FlipPage />

      {/* Blurred background animation */}
      <div className="fixed right-0 top-0 -z-10 h-full w-full brightness-[70%] lg:w-[calc(100vw-320px)]">
        <BackgroundRedBlur />
      </div>
    </main>
  );
};

export default FeedPage;
