import React from "react";
import { useDispatch } from "react-redux";

const style = {
  menuElement: "relative rounded-sm hover:bg-black hover:bg-opacity-30",
  notMenuElement: "relative rounded-sm",
};

const Community = ({ isMenuElement, subreddit, icon }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={isMenuElement ? style.menuElement : style.notMenuElement}
      onClick={() => dispatch(menuToggle())}
    >
      {/* Community image */}
      <img
        src={icon}
        className=" absolute left-2 top-[50%] h-6 translate-y-[-50%] rounded-full"
      />
      {/* Community name */}
      <p className="rounded-md px-10 py-2 text-text_color">{subreddit}</p>
    </div>
  );
};

export default Community;
