import React from "react";
import { Link } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////

const style = {
  menuElement:
    "hover:bg-black hover:bg-opacity-30 z-20 w-full flex items-center justify-start",
  notMenuElement:
    "hover:underline text-text_color z-20 w-full flex items-center justify-start",
};

////////////////////////////////////////////////////////////////////////////////

const Community = ({ isMenuElement, subreddit, icon }) => {

  // Srolling smoothly to the top of the page onClick
  function startOnTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <Link to={`/${subreddit}`}>
      <div
        className={isMenuElement ? style.menuElement : style.notMenuElement}
        onClick={() => startOnTop()}
      >
        {/* Community image */}
        <img
          src={icon}
          className="ml-2 aspect-square h-6 rounded-full object-contain"
        />
        {/* Community name */}
        <p className="rounded-md p-2 text-text_color">{subreddit}</p>
      </div>
    </Link>
  );
};

export default Community;
