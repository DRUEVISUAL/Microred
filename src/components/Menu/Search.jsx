import React from "react";

const Search = () => {
  return (
    <input
      type="text"
      className="h-full w-full rounded-md bg-gray_border bg-opacity-[14%] bg-search bg-[.5rem] bg-no-repeat pl-8 text-text_color placeholder-text_color placeholder-opacity-40 shadow-md ring-1 ring-gray_border ring-opacity-25"
      placeholder="Search"
      data-cy="menuSearchComponent"
    />
  );
};

export default Search;
