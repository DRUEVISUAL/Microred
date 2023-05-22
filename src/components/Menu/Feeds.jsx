import React from "react";
import Feed from "./Feed";

const Feeds = () => {
  return (
    <div>
      {/* Feed title */}
      <p className="mb-2 pl-2 pt-2 text-text_color text-opacity-50">Feeds</p>
      {/* Feed elements container */}
      <div className="flex flex-col gap-2">
        {/* Feed element */}
        <Feed />
      </div>
    </div>
  );
};

export default Feeds;
