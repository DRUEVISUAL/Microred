import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const style = {
  menuElement: "relative rounded-sm hover:bg-black hover:bg-opacity-30 z-20",
  notMenuElement: "relative rounded-sm",
};

const Community = ({ isMenuElement, subreddit, icon }) => {
  const dispatch = useDispatch();
  return (
    <Link
      className={isMenuElement ? style.menuElement : style.notMenuElement}
      onClick={() => dispatch(menuToggle())}
      to={`https://www.reddit.com/${subreddit}`}
    >
      {/* Community image */}
      <img
        src={icon}
        className=" absolute left-2 top-[50%] h-6 w-6 object-contain translate-y-[-50%] rounded-full"
      />
      {/* Community name */}
      <p className="rounded-md px-10 py-2 text-text_color">{subreddit}</p>
    </Link>
  );
};

export default Community;
