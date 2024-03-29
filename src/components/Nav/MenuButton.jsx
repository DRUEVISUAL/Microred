import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/menu/menuSlice";

////////////////////////////////////////////////////////////////////////////////

const style = {
  openMenu:
    "z-10 h-5 w-6 bg-menu_open bg-contain bg-no-repeat lg:hidden transition-all duration-100 ease-out",
  closeMenu:
    "z-10 h-6 w-6 bg-menu_close bg-contain bg-no-repeat lg:hidden transition-all duration-100 ease-out",
};

////////////////////////////////////////////////////////////////////////////////

const MenuButton = () => {
  const dispatch = useDispatch();
  
  const menuState = useSelector((state) => state.menu);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <button
      className={menuState ? style.closeMenu : style.openMenu}
      onClick={() => dispatch(menuToggle())}
      data-cy="menuButtonPhone"
      aria-label="menu button"
    ></button>
  );
};

export default MenuButton;
