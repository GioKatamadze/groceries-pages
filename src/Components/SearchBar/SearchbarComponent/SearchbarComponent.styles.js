import styled from "styled-components";

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

export default StyledInput;
