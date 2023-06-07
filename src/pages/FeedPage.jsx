import React, { useEffect } from "react";
import { fetchTopPosts, getTopPosts } from "../features/feeds/topFeedSlice";
import { useDispatch, useSelector } from "react-redux";
import Tile from "../components/Tile/Tile";

const FeedPage = () => {
  const dispatch = useDispatch();
  const topPosts = useSelector((state) => state.topFeed.topPosts);
  window.topPosts = topPosts;
  useEffect(() => {
    dispatch(fetchTopPosts());
  }, []);

  //
  return (
    <main className="absolute right-0 top-14 mx-auto w-full pt-2 xs:px-2 sm:px-4 md:px-8 md:pt-4 lg:top-0 lg:w-[calc(100vw-320px)] lg:px-16 lg:pt-8">
      {topPosts?.map((post, index) => {
        return <Tile key={index} post={post.data} />;
      })}
    </main>
  );
};

export default FeedPage;
