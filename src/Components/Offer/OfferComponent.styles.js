import styled from "styled-components";

const StyledItem = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: white;
  border-radius: 30px;
  transition: 0.2s;
  display: ${(props) => (props.offerCount === 0 ? "none" : "flex")};
  box-shadow: rgb(255, 217, 19) 0px 0px 0px 3px,
    rgb(255, 156, 85) 0px 0px 0px 6px, rgb(255, 85, 85) 0px 0px 0px 9px;

  :hover {
    cursor: pointer;
    box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.5);
  }

  .img {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

    img {
      max-width: 80%;
      max-height: 90%;
    }
  }

  .label {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;

    h3 {
      width: 100%;
      font-weight: 700;
      color: #474747;
    }
  }

  .priceBox {
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    .forFree {
      border: 1px solid rgba(255, 148, 70, 0.5);
      box-shadow: 5px 5px 20px rgba(255, 210, 178, 0.5);
      border-radius: 10px;
      padding: 3px 10px;
      width: max-content;
      background: rgba(0, 167, 17);
      color: #fff;
    }

    .price {
      width: max-content;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #474747;
    }
  }

  @media only screen and (min-width: 600px) {
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

    .delete {
      height: 25px;
      width: 25px;
    }

    .priceAndControllers {
      margin-top: 50px;
    }

    .quantityAvailable {
      .more {
        margin-top: 20px;
        padding: 5px 15px;
      }
    }
  }
`;

export default StyledItem;
