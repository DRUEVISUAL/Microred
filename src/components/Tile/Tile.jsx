import React from "react";
import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";

const Tile = () => {
  return (
    <article
      className="h-max-content mx-auto mb-12 flex max-h-[90vh] min-h-[480px] w-full min-w-[320px] max-w-[700px] flex-col items-center justify-between rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-20 p-2 xs:aspect-[1/1.5] lg:mb-16"
      data-cy="tile"
    >
      <Top />
      <Content />
      <Bottom />
    </article>
  );
};

export default Tile;
