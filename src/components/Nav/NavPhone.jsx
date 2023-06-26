import React, { useEffect } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/menu/menuSlice";

const style = {
  menuClosed:
    "fixed left-0 top-14 h-screen z-10 w-full bg-basecolor p-2 bg-opacity-[20%] backdrop-blur-3xl backdrop-brightness-[20%] lg:static lg:mt-6 lg:rounded-md lg:bg-black lg:bg-opacity-30 translate-x-full lg:hidden transition-all duration-500",
  menuOpen:
    "fixed left-0 top-14 h-screen z-10 w-full bg-basecolor bg-opacity-[20%] backdrop-blur-3xl backdrop-brightness-[20%] p-2 lg:static lg:mt-6 lg:rounded-md lg:bg-black lg:bg-opacity-30 translate-x-0 lg:hidden transition-all duration-500 pb-4",
};

const NavPhone = () => {
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
      <nav className="fixed left-0 top-0 z-10 flex h-14 w-screen items-center justify-between border-gray_border border-opacity-10 bg-basecolor bg-opacity-20 p-2 shadow-md backdrop-blur-3xl backdrop-brightness-[20%] lg:hidden">
        {/*  */}
        <Logo />

        {/* //////////////////////////////////////// */}
        {/* Menu toggle button (Phone only) */}
        <MenuButton />
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

export default NavPhone;
