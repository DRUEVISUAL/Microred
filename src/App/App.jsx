import React from "react";
import Nav from "../components/Nav/Nav";
import Tile from "../components/Tile/Tile";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Nav />
      <main className="absolute right-0 top-14 mx-auto h-[calc(100vh-56px)] w-screen pt-4 xs:px-2 sm:px-4 md:px-8 lg:top-0 lg:h-screen lg:w-[calc(100vw-320px)] lg:px-16 lg:pt-8">
        <Tile />
      </main>
    </div>
  );
};

export default App;
