import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { menuToggle } from "../../features/menu/menuSlice";

const style = {
  menuElement:
    "hover:bg-black hover:bg-opacity-30 z-20 w-full flex items-center justify-start",
  notMenuElement:
    "hover:underline text-text_color z-20 w-full flex items-center justify-start",
};

const Community = ({ isMenuElement, subreddit, icon }) => {
  const dispatch = useDispatch();
  return (
    <Link
      className={isMenuElement ? style.menuElement : style.notMenuElement}
      to={`/${subreddit}`}
    >
      {/* Community image */}
      <img src={icon} className="ml-2 h-6 w-6 rounded-full object-contain" />
      {/* Community name */}
      <p
        className="rounded-md p-2 text-text_color"
        onClick={() => dispatch(menuToggle())}
      >
        {subreddit}
      </p>
    </Link>
  );
};

export default Community;
