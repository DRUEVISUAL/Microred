import React from "react";
import NavPhone from "../components/Nav/NavPhone";
import NavDesktop from "../components/Nav/NavDesktop";
import { Outlet } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////

const rootLayout = () => {
  return (
    <div className="h-[100vh] w-screen">
      <NavPhone />
      <NavDesktop />
      <Outlet />
    </div>
  );
};

export default rootLayout;
