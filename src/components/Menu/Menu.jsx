import React from "react";
import Search from "./Search";
import FeedsAndCommunities from "./FeedsAndCommunities";

const Menu = () => {
  return (
    <div className="h-full">
      {/* Search bar, small device visible, medium and large device hidden */}
      <div className="mb-2 h-10 md:hidden">
        <Search />
      </div>
      <FeedsAndCommunities />
    </div>
  );
};

export default Menu;
