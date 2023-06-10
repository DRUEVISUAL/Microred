import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  active:
    "flex items-center justify-start bg-black bg-opacity-40 hover:bg-opacity-30 lg:rounded-md ring-1 ring-gray_border ring-opacity-10 shadow-md",
  inactive:
    "flex items-center justify-start hover:bg-black hover:bg-opacity-30 lg:rounded-md",
};

const Feed = ({ name }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
        to={`${name.toLowerCase()}`}
      >
        <img
          src={`src/assets/${name}_feed.svg`}
          alt={name}
          className="h-full w-6 pl-2"
        />
        <p className="rounded-md py-2 pl-2 text-lg font-medium text-text_color">
          {name}
        </p>
      </NavLink>
    </>
  );
};

export default Feed;
