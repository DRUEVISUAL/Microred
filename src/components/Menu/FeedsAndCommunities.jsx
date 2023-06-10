import React from "react";
import Feeds from "./Feeds";
import Communities from "./Communities";

const FeedAndCommunities = () => {
  return (
    <div className="flex h-full flex-col gap-4 rounded-md bg-black bg-opacity-30 lg:bg-transparent">
      <Feeds />
    </div>
  );
};

export default FeedAndCommunities;
