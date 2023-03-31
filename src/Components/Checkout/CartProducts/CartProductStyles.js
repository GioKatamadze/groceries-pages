import styled from "styled-components";

const StyledItem = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.2);
  border-radius: 30px;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.5);
  }

  .img {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 80%;
    }
  }

  .labelTop {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;

    h3 {
      width: 100%;
      font-weight: 700;
      font-size: 16px;
      line-height: 15px;
      color: #474747;
    }

    .p {
      width: 100%;
      height: max-content;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #474747;
      margin-bottom: 10px;
    }
  }

  .controllers {
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .quantity {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }

  .quantityAvailable {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;

    .less,
    .more {
      border: 1px solid rgba(255, 148, 70, 0.5);
      box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
      border-radius: 10px;
      padding: 3px 10px;
      width: max-content;
    }
    .less {
      background: rgba(255, 147, 69, 0.8);
    }
    .more {
      background: rgba(0, 167, 17, 0.5);
    }
  }

  .quantity {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .quantityControllers {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 10px;

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

    .count {
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
    }
  }

  .delete {
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #7fd287;
    box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
  }

  .priceAndControllers {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 10px;

    .price {
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #474747;
    }
  }
  .labelBottom {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
    gap: 0;

    .labelTop {
      width: 45%;
      margin-top: 2vh;
      h3 {
        font-size: 20px;
        line-height: 0;
      }

      .p {
        font-size: 16px;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 40px;

    .img {
      width: 25%;
    }

    .labelTop {
      width: 45%;
      margin-top: 45px;
      h3 {
        font-size: 20px;
        line-height: 0;
      }

      .p {
        font-size: 16px;
      }
    }

    .controllers {
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
    }

    .quantity {
      width: 100%;
      height: 100%;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      margin-top: 50px;
    }

    .quantityControllers {
      margin-top: 0;
      .plus,
      .minus,
      .count {
        height: 25px;
        width: 25px;
      }
    }

    .delete {
      height: 25px;
      width: 25px;
    }

    .priceAndControllers {
      margin-top: 50px;
    }

    .quantityAvailable {
      .less,
      .more {
        margin-top: 20px;
        padding: 5px 15px;
      }
    }
  }
`;

export default StyledItem;
