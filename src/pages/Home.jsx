import React from "react";

const Home = () => {
  return (
    <div className="absolute right-0 grid h-screen w-screen place-content-center text-text_color lg:w-[calc(100vw-320px)]">
      <h1 className="z-10 text-6xl font-bold">Welcome</h1>
      <div className="absolute bottom-24 h-24 w-80 animate-pulse_4000 bg-red blur-[170px] lg:w-96"></div>
      <div className="absolute right-0 top-24 h-24 w-80 animate-pulse_5000 bg-red blur-[170px] lg:w-96"></div>
      <div className="absolute h-24 animate-pulse bg-red blur-[170px] lg:w-96"></div>
      <div className="absolute right-1/2 top-1/2 h-24 lg:w-48 w-0 animate-pulse_6000 bg-red blur-[200px]"></div>
      <div className="animate-pulse_7000 absolute bottom-0 right-0 h-24 w-80 bg-red blur-[170px] lg:w-96"></div>
    </div>
  );
};

export default Home;
