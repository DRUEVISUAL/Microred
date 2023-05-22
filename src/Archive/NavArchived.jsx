import React from "react";

const Nav = ({ menuToggle, menuState }) => {
  

  return (
    //Nav container
    <nav className="relative flex h-14 w-screen items-center justify-between px-2 lg:fixed lg:h-screen lg:w-[320px] lg:flex-col lg:justify-start lg:p-2">
      {/* //////////////////////////////////////////////////////////// */}

      {/* Logo */}
      {/* <div className="group z-[1] flex cursor-pointer items-center justify-center rounded-md lg:mt-4 lg:p-4 lg:px-8 lg:hover:bg-black lg:hover:bg-opacity-30">
        <img
          src="./src/assets/logo.svg"
          alt="logo vector image"
          className="duration-200 ease-in-out group-hover:animate-pulse "
        />
        <p className="text-3xl font-semibold text-red group-hover:animate-pulse">
          microred
        </p>
      </div> */}

      {/* Menu */}
      

      {/* //////////////////////////////////////////////////////////// */}

      {/* Search */}
      <input
        type="text"
        className="z-[1] mb-4 mt-8 hidden h-14 w-full rounded-md bg-gray_border bg-opacity-[14%] pl-2 text-text_color placeholder-text_color placeholder-opacity-40 shadow-md ring-1 ring-gray_border ring-opacity-25 lg:block"
        placeholder="Search"
      />

      {/* //////////////////////////////////////////////////////////// */}

      {/* Feed and Communities container */}
      <div className="relative z-[3] hidden h-full w-full flex-col gap-10 rounded-md lg:flex">
        {/*  */}
        {/* Feed container */}
        <div className="flex flex-col gap-2">
          {/* Feed container title */}
          <p className="p-2 pb-0 text-sm text-text_color text-opacity-50">
            Feeds
          </p>

          {/* Feed elements container */}
          <div className="flex flex-col justify-center gap-2">
            {/* Feed element */}
            <div className="hover:bg-black hover:bg-opacity-30">
              <p className="rounded-md bg-home_feed bg-6 bg-[center_left_.5rem] bg-no-repeat py-2 pl-10 text-lg font-medium text-text_color">
                Home
              </p>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////// */}

        {/* Communities container */}
        <div className="flex flex-col gap-2">
          {/* Communities container title */}
          <p className="p-2 pb-0 text-sm text-text_color text-opacity-50">
            Your Communities
          </p>

          {/* Communities element container */}
          <div className="flex flex-col gap-2">
            {/* Community element */}
            <div className="relative rounded-sm hover:bg-black hover:bg-opacity-30 ">
              <div className=" absolute left-2 top-[50%] h-6 w-6 translate-y-[-50%] rounded-full bg-red"></div>
              <p className="rounded-md px-10 py-2 text-text_color">
                r/Community
              </p>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////// */}

        {/* Communitites Background */}
        <div className="absolute left-0 top-0 -z-[1] h-full w-full rounded-md bg-black bg-opacity-[24%]"></div>
      </div>

      {/* //////////////////////////////////////////////////////////// */}

      {/* Nav Background */}
      {/* <div className=" absolute left-0 top-0 h-full w-full border-r-[1px] border-gray_border border-opacity-[24%] bg-basecolor bg-opacity-[24%]"></div>*/}
    </nav>
  );
};

export default Nav;
