import styled from "styled-components";

const StyledInput = styled.input`
  background: red;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid rgba(190, 190, 190, 0.5);
  box-shadow: 5px 5px 20px rgba(181, 181, 181, 0.2);
  border-radius: 30px;
`;

const SearchBar = ({ keyword, onChange }) => {
  return (
    <StyledInput
      key="search-bar"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
