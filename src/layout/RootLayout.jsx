import React from "react";
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////

const rootLayout = () => {
  return (
    <div className="h-screen w-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default rootLayout;
