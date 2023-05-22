import React from "react";

const buttonStyle = {
  open: "",
  close: "z-[2] h-5 w-6 bg-menu_close bg-contain bg-no-repeat lg:hidden",
};

const MenuButton = ({ menuToggle }) => {
  return (
    <button
      className="z-[2] h-5 w-6 bg-menu_open bg-contain bg-no-repeat lg:hidden"
      onClick={menuToggle}
    ></button>
  );
};

export default MenuButton;
