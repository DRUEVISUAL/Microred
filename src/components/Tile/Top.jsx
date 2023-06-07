import React from "react";
import Community from "../Menu/Community";

const Top = ({ title, author, subreddit, created }) => {
  return (
    <div className="w-full rounded-md border-1 border-gray_border border-opacity-[14%] shadow-md">
      {/* Community, author and post time */}
      <div className="flex items-center justify-between py-1 text-[10px] lg:text-xs">
        <Community isMenuElement={false} subreddit={subreddit} />
        <div className="flex items-center gap-2 pr-2 text-text_color opacity-60">
          <p>Posted by: {author}</p>
          <p>21 hours ago</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="w-full rounded-b-md bg-gray_element_background bg-opacity-[15%] p-2 text-sm font-medium tracking-wide text-text_color lg:text-base">
        {title}
      </h2>
    </div>
  );
};

export default Top;
