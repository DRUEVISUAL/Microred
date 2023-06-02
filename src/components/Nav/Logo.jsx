import React from "react";
import { auth_URL } from "../../api/reddit";

const Logo = () => {
  return (
    <div className="group z-[2] flex cursor-pointer items-center justify-center rounded-md transition-all ease-in-out lg:mt-4 lg:p-4 lg:px-8 lg:hover:bg-black lg:hover:bg-opacity-30">
      <img
        src="./src/assets/logo.svg"
        alt="logo vector image"
        className="scale-75 duration-200 ease-out group-hover:animate-pulse lg:scale-100"
      />
      <a href={auth_URL} className="-ml-1 text-2xl font-semibold text-red group-hover:animate-pulse lg:ml-0 lg:text-3xl">
        Microred
      </a>
    </div>
  );
};

export default Logo;
