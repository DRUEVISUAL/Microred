import React from "react";
import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";

const Tile = () => {
  return (
    <div className="h-max-content mx-auto mb-12 flex max-h-[700px] min-h-[480px] min-w-[320px] max-w-[700px] flex-col items-center justify-between rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-20 p-2 xs:aspect-[1/1.5] w-full lg:mb-16">
      <Top />
      <Content />
      <Bottom />
    </div>
  );
};

export default Tile;
