import React from "react";

const menuStyle = {
  closed:
    "positon absolute left-0 top-14 flex h-full w-full translate-x-full flex-col justify-center transition-transform lg:hidden duration-300",
  open: "positon absolute left-0 top-14 flex h-full w-full translate-x-0 flex-col justify-center transition-transform lg:hidden duration-300",
};

const Menu = ({ menuState }) => {
  return (
    <div className={menuState === false ? menuStyle.closed : menuStyle.open}>
      {/* Search */}
      {/* <input
        type="text"
        className="min-w-80 z-[2] mx-auto mb-4 mt-8 h-14 w-full max-w-md rounded-md bg-gray_border bg-opacity-[14%] pl-2 text-text_color placeholder-text_color placeholder-opacity-40 shadow-md ring-1 ring-gray_border ring-opacity-25"
        placeholder="Search"
      /> */}

      {/* //////////////////////////////////////////////////////////// */}

      {/* Feed and Communities container */}
      <div className="min-w-80 relative z-[3] mx-auto flex h-full w-full max-w-md flex-col gap-10 rounded-md">
        {/*  */}
        {/* Feed container */}
        {/* <div className="flex flex-col gap-2">

          <p className="p-2 pb-0 text-sm text-text_color text-opacity-50">
            Feeds
          </p>


          <div className="flex flex-col justify-center gap-2">

            <div className="hover:bg-black hover:bg-opacity-30">
              <p className="rounded-md bg-home_feed bg-6 bg-[center_left_.5rem] bg-no-repeat py-2 pl-10 text-lg font-medium text-text_color">
                Home
              </p>
            </div>
          </div> */}
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
            </div>{" "}
            {/* Community element */}
          </div>{" "}
          {/* Communities element container */}
        </div>{" "}
        {/* Communities container */}
        {/* //////////////////////////////////////////////////////////// */}
        {/* Communitites Background */}
        <div className="absolute left-0 top-0 -z-[1] h-full w-full rounded-md bg-black bg-opacity-[24%]"></div>
      </div>

      {/* //////////////////////////////////////////////////////////// */}

      {/* Background */}
      {/* <div className=" absolute left-0 top-0 h-full w-full bg-basecolor bg-opacity-[24%]"></div> */}
    </div>
  );
};

export default Menu;
