import React from "react";
import Feed from "./Feed";
import { useSelector } from "react-redux";

const Feeds = () => {
  const feeds = useSelector((store) => store.feeds);
  return (
    <div>
      {/* Feed title */}
      <p className="mb-2 pl-2 pt-2 text-text_color text-opacity-50">Feeds</p>
      {/* Feed elements container */}
      <div className="flex flex-col gap-2">
        {/* Feed element */}
        {feeds.map((feed) => {
          return <Feed name={feed} key={feed}/>;
        })}
      </div>
    </div>
  );
};

export default Feeds;
