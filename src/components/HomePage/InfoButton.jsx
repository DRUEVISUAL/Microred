import React from "react";

const InfoButton = () => {
  return (
    <>
      <button className="absolute bottom-[5%] right-[5%] h-6 w-6 rounded-full bg-text_color text-center text-lg text-black lg:right-[2.5%]">
        i
      </button>
      <div className="absolute bottom-[5%] right-[5%] -z-10 h-6 w-6 animate-ping_2000 rounded-full bg-text_color bg-opacity-80 p-1 lg:right-[2.5%]"></div>
    </>
  );
};

export default InfoButton;
