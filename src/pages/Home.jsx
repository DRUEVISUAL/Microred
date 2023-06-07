import React from "react";

const Home = () => {
  return (
    <div className="absolute right-0 grid h-screen w-screen place-content-center border-2 border-red text-text_color lg:w-[calc(100vw-320px)]">
      <h1 className="z-10 text-6xl font-bold">Welcome</h1>
      <div className="absolute bottom-24 h-24 w-96 animate-pulse_5000 bg-red blur-[180px]"></div>
      <div className="absolute right-0 top-24 h-24 w-96 animate-pulse_4000 bg-red blur-[180px]"></div>
      <div className="absolute h-24 w-96 animate-pulse bg-red blur-[180px]"></div>
      <div className="absolute right-1/2 top-1/2 h-24 w-48 animate-pulse_6000 bg-red blur-[200px]"></div>
      <div className="animate-pulse_7000 absolute bottom-0 right-0 h-24 w-96 bg-red blur-[180px]"></div>
    </div>
  );
};

export default Home;
