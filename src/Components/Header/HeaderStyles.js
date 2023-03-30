import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  justify-content: center;

  .mainWrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    color: black;
    margin-top: 5vh;
  }

  .title {
    font-size: 12px;
    font-weight: 700;
    line-height: 10px;
    color: black;
    :hover {
      cursor: pointer;
    }
  }

  .searchWrapper {
    display: none;
  }

  .sideNav {
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: nowrap;
    gap: 10px;

    .heart,
    .cart,
    .user {
      position: relative;
      z-index: 1;
      padding: 0 10px 0 0;
      img {
        width: 30px;
        height: auto;
      }
      :hover {
        cursor: pointer;
      }
    }

    .user img {
      width: 30px;
      height: auto;
    }

    .wishCounter,
    .cartCounter {
      width: 18px;
      height: 18px;
      position: absolute;
      top: -15px;
      right: -2px;
      border-radius: 100%;
      z-index: 2;
      opacity: 0.8;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 13px;
    }

    .wishCounter {
      background-color: #e86f6f;
    }

    .cartCounter {
      background-color: #0098ed;
    }
  }
  @media only screen and (min-width: 600px) {
    .title {
      font-size: 15px;
    }

    .sideNav {
      transform: translateY(-10px);
      .heart,
      .cart {
        padding: 18px 18px 0 0;
        img {
          width: 35px;
        }
      }

      .user img {
        width: 35px;
      }

      .wishCounter,
      .cartCounter {
        width: 20px;
        height: 20px;
        top: -5px;
        right: 0;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .mainWrapper {
      margin-top: 10vh;
    }

    .title {
      font-size: 20px;
      line-height: 27px;
    }

    .searchWrapper {
      position: relative;
      height: 80px;
      display: flex;
      justify-content: center;
      padding: 0 3vw;
      flex-grow: 1;
      z-index: 1;

      img {
        z-index: 2;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) scale(0.8);
        right: 5vw;
      }
    }

    .sideNav {
      .heart,
      .cart {
        padding: 20px 20px 0 0;
      }

      .wishCounter,
      .cartCounter {
        width: 21px;
        height: 21px;
        top: 0;
        right: 0;
      }
    }
  }
`;

export default StyledHeader;
