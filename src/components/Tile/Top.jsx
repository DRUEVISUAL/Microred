import React from "react";
import Community from "../Menu/Community";

const Top = () => {
  return (
    <div className="w-full rounded-md border-1 border-gray_border border-opacity-[14%] shadow-md">
      {/* Community, author and post time */}
      <div className="flex items-center justify-between text-[10px] lg:text-xs py-1">
        <Community isMenuElement={false}/>
        <div className="flex items-center gap-2 pr-2 text-text_color opacity-60">
          <p>Posted by: Authorname</p>
          <p>21 hours ago</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="w-full rounded-b-md bg-gray_element_background bg-opacity-[15%] p-2 text-text_color text-sm font-medium lg:text-base tracking-wide">
        This is a title and shows an example how it will look like
      </h2>
    </div>
  );
};

export default Top;
