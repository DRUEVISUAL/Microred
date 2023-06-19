import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch, removeResults } from "../../features/search/searchSlice";

////////////////////////////////////////////////////////////////////////////////

const style = {
  removeTrue:
    "absolute right-2 top-0 h-full w-4 bg-menu_close bg-[60%] bg-no-repeat opacity-80 transition-all duration-600",
  removeFalse:
    "absolute -right-2 top-0 h-full w-4 bg-menu_close bg-[60%] bg-no-repeat opacity-0 transition-all duration-600",
};

////////////////////////////////////////////////////////////////////////////////

const Search = () => {
  const dispatch = useDispatch();

  // Getting search results from the redux store
  const searchResults = useSelector((state) => state.search.results);

  // State for searchfield value
  const [searchField, setSearchField] = useState("");

  ////////////////////////////////////////////////////////////////////////////////

  // Saving the input value to update the UI, this will be dispatched to the fetchSearch thunk
  function handleInputSearch(e) {
    setSearchField(e.target.value);
  }

  // Dispatching the value and fetching the data based on the input value
  useEffect(() => {
    dispatch(fetchSearch(searchField));
  }, [searchField]);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className="relative h-full w-full rounded-md p-1"
      aria-label="searchField"
    >
      <input
        type="text"
        name="search"
        value={searchField}
        onChange={handleInputSearch}
        className="h-full w-full rounded-md bg-gray_border bg-opacity-[14%] bg-search bg-[.5rem] bg-no-repeat py-2 pl-8 text-text_color placeholder-text_color placeholder-opacity-40 shadow-md ring-1 ring-gray_border ring-opacity-25"
        placeholder="Search"
        data-cy="menuSearchComponent"
      />
      {/* Clear search field */}
      <button
        className={
          searchResults.length === 0 ? style.removeFalse : style.removeTrue
        }
        onClick={() => (dispatch(removeResults()), setSearchField(""))}
      ></button>
    </div>
  );
};

export default Search;
