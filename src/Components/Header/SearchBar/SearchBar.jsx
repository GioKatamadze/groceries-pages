import styled from "styled-components";
import React, { useContext } from "react";
import { AppContext } from "../../../AppContext.js";

const StyledInput = styled.input`
  width: 90%;
  background: #ffffff;
  border: 1px solid rgba(190, 190, 190, 0.5);
  box-shadow: 5px 5px 20px rgba(181, 181, 181, 0.2);
  border-radius: 30px;
  :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 20px;
    width: 100%;
    background: #ffffff;
  }
`;

const SearchBar = () => {
  const { setIsSearching, setSearchResult } = useContext(AppContext);
  const handleChange = async (event) => {
    if (event.target.value === "") {
      setIsSearching(false);
      setSearchResult("");
    } else {
      const result = event.target.value.toLowerCase();
      setSearchResult(result);
      setIsSearching(true);
    }
  };

  return <StyledInput onChange={handleChange} />;
};

export default SearchBar;
