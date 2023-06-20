import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMorePosts } from "../../features/feeds/feedSlice";

const FlipPage = () => {
  const feed = window.location.pathname.slice(1);
  const after = useSelector((state) => state.feed.after);

  const dispatch = useDispatch();

  function startOnTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex w-full items-center justify-center gap-4 pb-16">
      <button
        className="rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-40 px-4 py-2 text-text_color hover:bg-opacity-60"
        onClick={() => (
          dispatch(fetchMorePosts({ feed, after })), startOnTop()
        )}
      >
        Next Page
      </button>
    </div>
  );
};

export default FlipPage;
