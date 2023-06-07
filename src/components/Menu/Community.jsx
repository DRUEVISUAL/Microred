import React, { useEffect } from "react";

const style = {
  menuElement: "relative rounded-sm hover:bg-black hover:bg-opacity-30",
  notMenuElement: "relative rounded-sm",
};

const Community = ({ isMenuElement, subreddit }) => {
  return (
    <div className={isMenuElement ? style.menuElement : style.notMenuElement}>
      {/* Community image */}
      <img className=" absolute left-2 top-[50%] h-6 w-6 translate-y-[-50%] rounded-full" />
      {/* Community name */}
      <p className="rounded-md px-10 py-2 text-text_color">{subreddit}</p>
    </div>
  );
};

export default Community;
