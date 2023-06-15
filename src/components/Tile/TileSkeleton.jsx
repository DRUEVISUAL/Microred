import React from "react";
import { ClipLoader } from "react-spinners";

const TileSkeleton = () => {
  return (
    <div className=" h-max-content mx-auto mb-12 flex max-h-[90vh] min-h-[480px] w-full min-w-[320px] max-w-[700px] flex-col animate-pulse ease-in-out items-center justify-between gap-2 rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-20 p-2 xs:aspect-[1/1.5] lg:mb-16">
      <div className="h-[12%] w-full rounded-md bg-basecolor bg-opacity-10"></div>
      <div className="relative grid h-[80%] w-full place-content-center rounded-md bg-basecolor bg-opacity-10 animate-pulse">
        <ClipLoader
          color="#fcfcfc"
          speedMultiplier={0.5}
          className="scale-150"
        />
      </div>
      <div className="h-[8%] w-full rounded-md bg-basecolor bg-opacity-10 animate-pulse"></div>
    </div>
  );
};

export default TileSkeleton;
