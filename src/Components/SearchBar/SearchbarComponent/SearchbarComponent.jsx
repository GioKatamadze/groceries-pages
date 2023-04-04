import React, { useContext } from "react";
import { AppContext } from "../../../AppContext.js";
import StyledInput from "./SearchbarComponent.styles.js";

const SearchBar = () => {
  const { setIsSearching, setSearchResult } = useContext(AppContext);

  const handleSearchInput = async (event) => {
    if (event.target.value === "") {
      setIsSearching(false);
      setSearchResult("");
    } else {
      const result = event.target.value.toLowerCase();
      setSearchResult(result);
      setIsSearching(true);
    }
  };

  return <StyledInput onChange={handleSearchInput} />;
};

export default SearchBar;
