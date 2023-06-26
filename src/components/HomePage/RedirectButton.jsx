import React from "react";
import { Link } from "react-router-dom";

const RedirectButton = ({ icon, alt }) => {
  return (
    <Link
      className="hover0 flex aspect-square w-1/3 flex-col justify-between rounded-md p-2 text-center text-xs hover:bg-basecolor hover:bg-opacity-[14%] hover:shadow-md hover:ring-1 hover:ring-gray_border hover:ring-opacity-[14%]"
      to={
        icon === "browse"
          ? "/top"
          : icon === "code"
          ? "https://github.com/DRUEVISUAL/Microred"
          : "/"
      }
      onClick={icon === "feedback" ? () => alert("Feature in progress") : null}
    >
      <img
        src={`/assets/${icon}.gif`}
        alt={alt}
        className="mx-auto max-h-8 text-[.5rem]"
      />
      {alt}
    </Link>
  );
};

export default RedirectButton;
