import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "../Menu/Menu";
import Search from "../Menu/Search";
import { useLocation } from "react-router-dom";
import { navToggle } from "../../features/menu/navDesktopSlice";
import { useDispatch, useSelector } from "react-redux";

const style = {
  visible:
    "fixed left-0 top-0 z-10 hidden h-screen w-80 flex-col items-center justify-start border-r-[1px] border-gray_border border-opacity-10 bg-basecolor bg-opacity-[24%] p-2 shadow-md backdrop-blur-3xl backdrop-brightness-[20%] lg:flex transition-translate duration-500 ease",
  hidden:
    "fixed left-0 top-0 z-10 hidden h-screen w-80 flex-col items-center justify-start border-r-[1px] border-gray_border border-opacity-10 bg-basecolor bg-opacity-[24%] p-2 shadow-md backdrop-blur-3xl backdrop-brightness-[20%] lg:flex -translate-x-80 transition-translate duration-500 ease",
};

const NavDesktop = () => {
  const location = useLocation();
  const navDesktopState = useSelector((store) => store.navDesktop);
  const dispatch = useDispatch();

  useEffect(() => {
    const isHomeScreen = location.pathname === "/";
    dispatch(navToggle(!isHomeScreen));
  }, [location]);

  //////////////////////////////////////////////////

  return (
    <>
      <nav className={navDesktopState ? style.visible : style.hidden}>
        {/*  */}
        <Logo />

        {/* //////////////////////////////////////// */}
        {/* Search bar, small device hidden, medium and above visible */}
        <div className="hidden w-1/2 md:h-10 lg:mt-6 lg:block lg:h-12 lg:w-full">
          <Search />
        </div>

        {/* Desktop menu */}
        <div className="absolute left-0 top-14 hidden h-full w-full bg-basecolor bg-opacity-20 p-2 lg:static lg:mt-6 lg:block lg:rounded-md lg:bg-black lg:bg-opacity-30">
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default NavDesktop;

// function NavDesktopFragment() {
//   return (

//   );
// }
