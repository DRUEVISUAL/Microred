import React, { useEffect, useState } from "react";
import { useHref } from "react-router-dom";

const style = {
  wgroup:
    "group relative mb-2 flex h-48 w-full items-center overflow-hidden rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-[14%] p-2 shadow-md md:mb-4 lg:mb-8",
  nogroup:
    "relative mb-2 flex h-48 w-full items-center overflow-hidden rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-[14%] p-2 shadow-md md:mb-4 lg:mb-8",
};

////////////////////////////////////////////////////////////////////////////////

const SubredditBannerElement = ({ subreddit }) => {
  // Subreddit icon
  const [icon, setIcon] = useState();

  // Subreddit banner background
  const [banner, setBanner] = useState();

  const [about, setAbout] = useState("");

  ////////////////////////////////////////////////////////////////////////////////

  // Fetching subreddit icon and banner
  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const data = await fetch(
          `https://www.reddit.com/${subreddit}/about.json`
        );
        const response = await data.json();
        const json = await response.data;
        const extractIcon = await json.community_icon.match(/.+?(?=\?)/);

        if (extractIcon) {
          setIcon(extractIcon);
        } else {
          setIcon(json.icon_img);
        }

        if (json.banner_img) {
          setBanner(json.banner_img);
        } else if (json.banner_background_image) {
          setBanner(json.banner_background_image.match(/.+?(?=\?)/));
        } else {
          setBanner(json.header_img);
        }

        setAbout(json.public_description_html);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIcon();
  }, [useHref()]);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={banner ? style.wgroup : style.nogroup}>
      {/* Subreddit icon */}
      {icon ? (
        <img
          src={icon}
          alt={`${subreddit} subreddit icon`}
          className="ml-4 aspect-square w-20 rounded-full border-1  border-gray_border border-opacity-[14%] bg-white shadow-md transition-all group-hover:opacity-50 group-hover:blur-sm lg:ml-6 lg:w-32"
        />
      ) : (
        <div className="flex aspect-square h-full items-center justify-center overflow-hidden rounded-full border-1 border-gray_border border-opacity-[14%] bg-white font-medium shadow-md transition-all group-hover:blur-sm">
          {subreddit}
        </div>
      )}

      {/* Subreddit name */}
      <h1 className="ml-4 w-max max-w-[80%] rounded-md border-1 border-gray_border border-opacity-[14%] bg-black bg-opacity-50 p-2 px-4 text-lg font-medium text-white shadow-md transition-all group-hover:blur-sm lg:text-2xl">
        {subreddit.slice(2)}
      </h1>

      {/* Subreddit banner background */}
      {banner ? (
        <img
          src={banner}
          alt={`${subreddit} subreddit icon`}
          className="absolute left-0 top-0 -z-10 h-full w-full rounded-[5px] object-cover blur-md brightness-90 transition-all group-hover:blur-none"
        />
      ) : null}
    </div>
  );
};

export default SubredditBannerElement;
