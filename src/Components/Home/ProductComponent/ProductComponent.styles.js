import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  height: 320px;
  margin-top: 30px;
  background-color: red;
  border-radius: 32px;

  .offerDiv {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .more {
      width: max-content;
      height: max-content;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(255, 148, 70, 0.5);
      box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
      border-radius: 10px;
      padding: 3px 10px;
      width: max-content;
      background-color: white;
      color: black;
      margin: auto 10px;
      font-size: 15px;
    }

    .offerName {
      display: block;
      color: white;
      margin-right: 10px;
      font-size: 15px;
      font-weight: 700;
      line-height: 1;
    }
  }
  @media only screen and (min-width: 600px) {
    width: 48%;
  }

  @media only screen and (min-width: 1024px) {
    width: 31%;
    gap: 10px;
  }
`;

export const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.2);
  border-radius: 30px;
  transition: 0.2s;
  height: ${(props) => (props.offer === true ? "85%" : "100%")};

  :hover {
    cursor: pointer;
    box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.5);
  }

  .img {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 90%;
    }
  }

  .label {
    width: 55%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
  }

  .labelTop {
    width: 100%;

    h3 {
      width: 100%;
      font-weight: 700;
      font-size: 16px;
      line-height: 15px;
      color: #474747;
    }

    .p {
      width: 100%;
      max-height: 90px;
      overflow-y: scroll;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #474747;
      @media (min-height: 120px) {
        overflow-y: auto;
      }
    }
  }

  .labelBottom {
    width: 100%;
  }

  .delete,
  .plus,
  .minus {
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #7fd287;
    box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
  }

  .minus {
    background-color: #e86f6f;
  }

  .quantity {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;

    .less,
    .more,
    .zero {
      border: 1px solid rgba(255, 148, 70, 0.5);
      box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
      border-radius: 10px;
      padding: 5px 15px;
      width: max-content;
    }
    .zero {
      background: rgba(220, 20, 60);
    }
    .less {
      background: rgba(255, 147, 69, 0.8);
    }
    .more {
      background: rgba(0, 167, 17, 0.5);
    }
  }

  .priceAndControllers {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 10px;

    .price {
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #474747;
    }

    .controllers {
      height: max-content;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
    }
  }

  .inCart {
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 10px;

    .plus,
    .minus {
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background-color: #7fd287;
      box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
    }

    .minus {
      background-color: #e86f6f;
    }

    .inCartCount {
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000000;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
    }
  }

  .cart,
  .heart {
    cursor: pointer;
    box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
  }

  @media only screen and (min-width: 600px) {
    .controllers {
      gap: 12px;
    }
  }

  @media only screen and (min-width: 1024px) {
    gap: 10px;

    .img {
      width: 55%;
    }

    .labelTop {
      h3 {
        font-size: 20px;
        line-height: 22px;
      }

      .p {
        font-size: 16px;
        max-height: 72px;
      }
    }

    .priceAndControllers {
      margin-top: 20px;

      .controllers {
        gap: 20px;
      }
    }
  }
`;
