import React from "react";
import Nav from "../components/Nav/Nav";
import Tile from "../components/Tile/Tile";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Nav />
      <main className="absolute right-0 top-14 mx-auto w-full pt-2 xs:px-2 sm:px-4 md:px-8 md:pt-4 lg:top-0 lg:w-[calc(100vw-320px)] lg:px-16 lg:pt-8">
        <Tile />
        <Tile />
      </main>
    </div>
  );
};

export default App;
