import styled from "styled-components";

const StyledItem = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.2);
  border-radius: 30px;

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
      max-height: 120px;
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

  .quantity {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;

    .less,
    .more {
      border: 1px solid rgba(255, 148, 70, 0.5);
      box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
      border-radius: 10px;
      padding: 5px 15px;
      width: max-content;
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

  .cart:hover,
  .heart:hover {
    cursor: pointer;
    box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
  }

  @media only screen and (min-width: 600px) {
    width: 48%;
    .controllers {
      gap: 12px;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 31%;
    margin-top: 40px;
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
      }
    }

    .priceAndControllers {
      margin-top: 50px;

      .controllers {
        gap: 20px;
      }
    }
  }
`;

export default StyledItem;
