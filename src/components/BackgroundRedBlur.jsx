import React from "react";
import { useSelector } from "react-redux";

const style = {
  fullScreen:
    "fixed right-0 -z-10 grid h-full w-full place-content-center text-text_color lg:w-[calc(100vw)] transition-all duration-500 ease opacity-70",
  halfScreen:
    "fixed right-0 -z-10 grid h-full w-full place-content-center text-text_color lg:w-[calc(100vw-320px)] transition-all duration-500 ease opacity-50",
};

////////////////////////////////////////////////////////////////////////////////

const BackgroundRedBlur = () => {
  const navDesktopState = useSelector((store) => store.navDesktop);

  return (
    <div className={!navDesktopState ? style.fullScreen : style.halfScreen}>
      <div className="absolute bottom-24 h-24 w-80 animate-pulse_4000 bg-red blur-[170px] lg:w-96"></div>
      <div className="absolute right-0 top-24 h-24 w-80 animate-pulse_5000 bg-red blur-[170px] lg:w-96"></div>
      <div className="absolute h-24 animate-pulse bg-red blur-[170px] lg:w-96"></div>
      <div className="absolute right-1/2 top-1/2 h-24 w-0 animate-pulse_6000 bg-red blur-[200px] lg:w-64"></div>
      <div className="animate-pulse_7000 absolute bottom-0 right-0 h-24 w-80 bg-red blur-[170px] lg:w-96"></div>
    </div>
  );
};

export default BackgroundRedBlur;
