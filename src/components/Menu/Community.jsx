import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { menuToggle } from "../../features/menu/menuSlice";

////////////////////////////////////////////////////////////////////////////////

const style = {
  menuElement:
    "hover:bg-black hover:bg-opacity-30 z-20 w-full flex items-center justify-start",
  notMenuElement:
    "hover:underline text-text_color z-20 w-full flex items-center justify-start",
};

////////////////////////////////////////////////////////////////////////////////

const Community = ({ isMenuElement, subreddit, icon }) => {
  const menu = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  function closeMenuIfOpen() {
    menu ? dispatch(menuToggle()) : null;
  }
  // Srolling smoothly to the top of the page onClick
  function startOnTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <Link to={`/${subreddit}`}>
      <div
        className={isMenuElement ? style.menuElement : style.notMenuElement}
        onClick={() => (startOnTop(), closeMenuIfOpen())}
      >
        {/* Community image */}
        {icon ? (
          <img
            src={icon}
            className="ml-2 aspect-square h-6 rounded-full object-contain"
          />
        ) : (
          <div className="ml-2 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-[4px] font-medium text-black">
            {subreddit}
          </div>
        )}
        {/* Community name */}
        <p className="rounded-md p-2 text-text_color">{subreddit}</p>
      </div>
    </Link>
  );
};

export default Community;
