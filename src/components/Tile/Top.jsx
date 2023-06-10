import React, { useEffect, useState } from "react";
import Community from "../Menu/Community";
import { Link } from "react-router-dom";

const Top = ({ title, author, subreddit, created, icon }) => {
  const [time, setTime] = useState({
    sec: null,
    min: null,
    hrs: null,
    dys: null,
    yrs: null,
  });
  useEffect(() => {
    // Epoch time of the post in seconds (initially milliseconds)
    let postEpoch = created * 1000;

    // Get the current time in milliseconds
    let currentTime = Date.now();

    // Calculate the elapsed time in milliseconds
    let elapsedTime = currentTime - postEpoch;

    // Convert milliseconds to seconds, minutes, hours, and days
    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);

    setTime({
      ["sec"]: seconds,
      ["min"]: minutes,
      ["hrs"]: hours,
      ["dys"]: days,
      ["yrs"]: years,
    });
  }, []);

  window.time = time;

  return (
    <div className="w-full rounded-md border-1 border-gray_border border-opacity-[14%] shadow-md">
      {/* Community, author and post time */}
      <div className="flex items-center justify-between py-1 text-[10px] lg:text-xs">
        <Community isMenuElement={false} subreddit={subreddit} icon={icon} />
        <div className="flex items-center gap-2 pr-2 text-text_color opacity-60">
          <p>
            Posted by:{" "}
            <Link
              className="hover:underline"
              to={`https://www.reddit.com/user/${author}`}
            >
              {author}
            </Link>
          </p>
          <p>
            {time.yrs
              ? `${time.yrs} years ago`
              : time.dys
              ? `${time.dys} days ago`
              : time.hrs
              ? `${time.hrs} hours ago`
              : time.min
              ? `${time.min} minutes ago`
              : time.sec
              ? `${time.sec} seconds ago`
              : "error"}
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="w-full rounded-b-md bg-gray_element_background bg-opacity-[15%] p-2 text-sm font-medium tracking-wide text-text_color lg:text-base">
        {title}
      </h2>
    </div>
  );
};

export default Top;
