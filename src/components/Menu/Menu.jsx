import React from "react";
import Search from "./Search";
import FeedsAndCommunities from "./FeedsAndCommunities";
import SearchPopUp from "./SearchPopUp";
import { useSelector } from "react-redux";

////////////////////////////////////////////////////////////////////////////////

const style = {
  empty: "z-24 left-0 top-14 mb-2 h-[0rem] opacity-0 w-full transition-all",
  populated:
    "z-24 left-0 top-14 mb-2 h-[16rem] w-full transition-all duration-500",
};

////////////////////////////////////////////////////////////////////////////////

const Menu = () => {
  // Getting the search results from the redux store
  const searchResults = useSelector((state) => state.search.results);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="h-full overflow-y-scroll pb-2">
      {/* Search bar, small device visible, medium and large device hidden */}
      <div className="mb-2 mt-2 h-10 md:hidden">
        <Search />
      </div>
      {/* Search popup */}
      <div
        className={searchResults.length === 0 ? style.empty : style.populated}
      >
        <SearchPopUp />
      </div>
      <FeedsAndCommunities />
    </div>
  );
};

export default Menu;
