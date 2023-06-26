import React from "react";
import { NavLink } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////

const Logo = () => {
  return (
    <NavLink
      className="group z-10 flex cursor-pointer items-center justify-center rounded-md transition-all ease-in-out ml-4 lg:ml-0 lg:mt-4 lg:p-4 lg:px-8 lg:hover:bg-black lg:hover:bg-opacity-30"
      to="/"
    >
      <img
        src="/assets/logo.svg"
        alt="logo vector image"
        className="lg:max-h-8 max-h-6 duration-200 ease-out group-hover:animate-pulse"
      />
      <button className="ml-1 text-2xl font-semibold text-red group-hover:animate-pulse lg:ml-0 lg:text-3xl">
        Microred
      </button>
    </NavLink>
  );
};

export default Logo;
