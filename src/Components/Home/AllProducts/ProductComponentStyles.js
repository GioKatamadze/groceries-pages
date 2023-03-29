import styled from "styled-components";

const StyledItem = styled.div`
  height: 300px;
  width: 28%;
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 25px;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.2);
  border-radius: 30px;
  gap: 10px;

  .img {
    width: 20vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 200px;
      max-height: 200px;
    }
  }

  .label {
    width: 20vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  .labelTop {
    width: 100%;
    h3 {
      width: 100%;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #474747;
    }

    .p {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #474747;
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
    margin-top: 50px;
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
      gap: 20px;
    }
  }
`;

export default StyledItem;
