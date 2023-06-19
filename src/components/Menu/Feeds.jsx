import React from "react";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/menu/menuSlice";

const Feeds = () => {
  const dispatch = useDispatch();

  const feeds = useSelector((store) => store.feeds);

  ////////////////////////////////////////////////////////////////////////////////

  // Scroll to the top of the page if new feed is selected
  function startOnTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {/* Feed title */}
      <p className="mb-2 pl-2 pt-2 text-text_color text-opacity-50">Feeds</p>
      {/* Feed elements container */}
      <div
        className="flex flex-col gap-2"
        onClick={() => (dispatch(menuToggle()), startOnTop())}
      >
        {/* Feed element */}
        {feeds.map((feed) => {
          return <Feed name={feed} key={feed} />;
        })}
      </div>
    </div>
  );
};

export default Feeds;
