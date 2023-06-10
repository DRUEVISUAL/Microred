import React from "react";

const Content = ({ image, video, isVideo }) => {
  const imageElement = <img src={image} alt="" className="max-h-full max-w-full" />;
  const videoElement = (
    <video width={500} height={500} controls muted>
      <source src={video} type="video/mp4" />
    </video>
  );
  window.videoElement = videoElement;

  return (
    <div className="my-2 flex h-full w-full items-center justify-center overflow-hidden rounded-md border-1 border-gray_border border-opacity-[14%] bg-black bg-opacity-[15%] shadow-md">
      {isVideo ? videoElement : imageElement}
    </div>
  );
};

export default Content;
