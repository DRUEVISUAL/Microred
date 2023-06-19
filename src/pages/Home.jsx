import React from "react";
import BackgroundRedBlur from "../components/BackgroundRedBlur";

const Home = () => {
  return (
    <div className="fixed right-0 top-0 grid h-full w-full place-content-center text-text_color lg:w-[calc(100vw-320px)]">
      <h1 className="text-center text-4xl font-bold text-text_color">
        Welcome
      </h1>
      <BackgroundRedBlur />
    </div>
  );
};

export default Home;
