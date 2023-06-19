import React, { useEffect, useState } from "react";

////////////////////////////////////////////////////////////////////////////////

const SubredditBannerElement = ({ subreddit }) => {
  // Subreddit icon
  const [icon, setIcon] = useState();

  // Subreddit banner background
  const [banner, setBanner] = useState();

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
      } catch (error) {
        console.error(error);
      }
    };
    fetchIcon();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="relative mb-2 flex h-48 w-full items-center overflow-hidden rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-[14%] p-8 shadow-md md:mb-4 lg:mb-8">
      {/* Subreddit icon */}
      <img
        src={icon}
        alt={`${subreddit} subreddit icon`}
        className="aspect-square h-full rounded-full border-1 border-gray_border border-opacity-[14%] bg-white shadow-md"
      />

      {/* Subreddit name */}
      <h1 className="ml-4 rounded-md border-1 border-gray_border border-opacity-[14%] bg-black bg-opacity-50 p-2 px-4 text-2xl font-medium text-white shadow-md">
        {subreddit.slice(2)}
      </h1>

      {/* Subreddit banner background */}
      {banner ? (
        <img
          src={banner}
          alt={`${subreddit} subreddit icon`}
          className="absolute left-0 top-0 -z-10 h-full w-full rounded-[5px] object-cover blur-md brightness-90"
        />
      ) : null}
    </div>
  );
};

export default SubredditBannerElement;
