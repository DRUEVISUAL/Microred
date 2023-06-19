import React from "react";

const SubredditBannerElement = ({subreddit, banner}) => {
  return (
    <div className="relative mb-2 flex h-48 w-full items-center rounded-md border-2 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-10 p-8 shadow-md md:mb-4 lg:mb-8">
      {/* Subreddit icon */}
      <img
        src={""}
        alt={`${""} subreddit icon`}
        className="aspect-square h-full rounded-full bg-white"
      />

      {/* Subreddit name */}
      <h1 className="ml-4 rounded-md bg-black bg-opacity-20 p-2 px-4 text-2xl font-medium text-white">
        {subreddit.slice(2)}
      </h1>

      {/* Subreddit banner background */}
      <img
        src={banner}
        alt=""
        className="absolute left-0 top-0 -z-10 h-full w-full rounded-[5px]"
      />
    </div>
  );
};

export default SubredditBannerElement;
