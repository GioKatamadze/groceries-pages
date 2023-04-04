import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  .calculatorDiv {
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    position: relative;

    h2 {
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      text-align: right;
      color: #000000;
      margin-right: 20%;
    }

    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      text-align: right;
      color: #82828b;
      margin-right: 30%;
    }
  }
`;

export const Hr = styled.div`
  width: 90%;
  height: 1px;
  background-color: #e6e6eb;
`;

export const Button = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    position: absolute;
    width: auto;
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
`;
