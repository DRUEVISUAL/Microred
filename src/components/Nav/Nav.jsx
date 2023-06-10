import React, { useEffect } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Menu from "../Menu/Menu";
import Search from "../Menu/Search";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/menu/menuSlice";
import SearchPopUp from "../Menu/SearchPopUp";

const style = {
  menuClosed:
    "fixed left-0 top-14 h-screen z-10 w-full bg-basecolor p-2 bg-opacity-[20%] backdrop-blur-3xl backdrop-brightness-[20%] lg:static lg:mt-6 lg:rounded-md lg:bg-black lg:bg-opacity-30 translate-x-full lg:hidden transition-all duration-500",
  menuOpen:
    "fixed left-0 top-14 h-screen z-10 w-full bg-basecolor bg-opacity-[20%] backdrop-blur-3xl backdrop-brightness-[20%] p-2 lg:static lg:mt-6 lg:rounded-md lg:bg-black lg:bg-opacity-30 translate-x-0 lg:hidden transition-all duration-500 pb-4",
};

const Nav = () => {
  const menuState = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  //////////////////////////////////////////////////
  // When conditions are met the menu closes

  function closeMenu() {
    if (window.innerWidth >= 922 && menuState) {
      dispatch(menuToggle());
    }
  }

  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, [window.innerWidth]);

  //////////////////////////////////////////////////

  return (
    <>
      <nav className="fixed left-0 top-0 z-10 flex h-14 w-screen items-center justify-between border-gray_border border-opacity-10 bg-basecolor bg-opacity-20 p-2 shadow-md backdrop-blur-3xl backdrop-brightness-[20%] lg:h-screen lg:w-80 lg:flex-col lg:justify-start lg:border-r-[1px] lg:bg-opacity-[24%]">
        <Logo />

        {/* //////////////////////////////////////// */}
        {/* Search bar, small device hidden, medium and above visible */}
        <div className="hidden w-1/2 md:block md:h-10 lg:mt-6 lg:h-12 lg:w-full">
          <Search />
        </div>

        {/* //////////////////////////////////////// */}
        {/* Menu toggle button (Phone only) */}
        <MenuButton />

        {/* //////////////////////////////////////// */}

        {/* Desktop menu */}
        <div className="absolute left-0 top-14 hidden h-full w-full bg-basecolor bg-opacity-20 p-2 lg:static lg:mt-6 lg:block lg:rounded-md lg:bg-black lg:bg-opacity-30">
          <Menu />
        </div>
      </nav>
      {/* Phone menu (outside from nav because chrome doenst support nested backdrop effects) */}
      <div
        className={menuState ? style.menuOpen : style.menuClosed}
        data-cy="phoneMenuComponentContainer"
      >
        <Menu />
      </div>
    </>
  );
};

export default Nav;
