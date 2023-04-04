import styled from "styled-components";

export const StyledCheckoutPage = styled.div``;

export const Button = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  .button {
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7fd287;
    border-radius: 8px;
    padding: 16px 32px;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
    transition: 0.2s;
    :hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
