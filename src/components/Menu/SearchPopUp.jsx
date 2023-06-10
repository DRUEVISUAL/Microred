import React from "react";
import { useSelector } from "react-redux";
import Community from "./Community";
import { nanoid } from "@reduxjs/toolkit";
import noSubredditIcon from "../../assets/missing_subreddit_icon.svg";
const SearchPopUp = () => {
  const searchResults = useSelector((state) => state.search.results);

  // Removing the parameters from the url to be able to use the icon
  function stripLink(url) {
    return url.match(/.+?(?=\?)/);
  }
  return (
    <aside className="h-full w-full overflow-y-scroll rounded-md bg-basecolor bg-opacity-20 shadow-md">
      {searchResults?.map((result) => {
        return (
          <Community
            subreddit={result.data.display_name_prefixed}
            icon={
              result.data.icon_img
                ? result.data.icon_img
                : result.data.community_icon
                ? stripLink(result.data.community_icon)
                : noSubredditIcon
            }
            isMenuElement={true}
            key={nanoid()}
          />
        );
      })}
    </aside>
  );
};

export default SearchPopUp;
