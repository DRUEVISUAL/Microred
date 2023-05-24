import React, { useEffect } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Menu from "../Menu/Menu";
import Search from "../Menu/Search";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/menu/menuSlice";

const style = {
  menuClosed:
    "absolute left-0 top-14 h-full w-full bg-basecolor bg-opacity-20 p-2 lg:static lg:mt-6 lg:rounded-md lg:bg-black lg:bg-opacity-30 translate-x-full lg:hidden transition-all duration-500",
  menuOpen:
    "absolute left-0 top-14 h-full w-full bg-basecolor bg-opacity-20 p-2 lg:static lg:mt-6 lg:rounded-md lg:bg-black lg:bg-opacity-30 translate-x-0 lg:hidden transition-all duration-500",
};

const Nav = () => {
  const menuState = useSelector((state) => state.menu);
  const dispatch = useDispatch();

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

  return (
    <nav className="z-[1] flex h-14 w-screen items-center justify-between border-gray_border border-opacity-10 bg-basecolor bg-opacity-20 p-2 lg:h-screen lg:w-80 lg:flex-col lg:justify-start lg:border-r-[1px]">
      <Logo />

      {/* //////////////////////////////////////// */}
      {/* Search bar, small device hidden, medium and large device visible */}
      <div className="hidden w-1/2 md:block md:h-10 lg:mt-6 lg:h-12 lg:w-full">
        <Search />
      </div>

      {/* //////////////////////////////////////// */}
      {/* Phone only menu toggle */}
      <MenuButton />

      {/* //////////////////////////////////////// */}

      {/* Phone menu */}
      <div className={menuState ? style.menuOpen : style.menuClosed}>
        <Menu />
      </div>
      {/* Desktop menu */}
      <div className="absolute left-0 top-14 hidden h-full w-full bg-basecolor bg-opacity-20 p-2 lg:static lg:mt-6 lg:block lg:rounded-md lg:bg-black lg:bg-opacity-30">
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
