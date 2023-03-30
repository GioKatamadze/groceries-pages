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
    font-size: 13px;
    font-weight: 700;
    line-height: 10px;
    color: black;
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
    .cart {
      position: relative;
      z-index: 1;
      padding: 15px 15px 0 0;
      img {
        width: 30px;
        height: auto;
      }
    }

    .user img {
      width: 30px;
      height: auto;
    }

    .wishCounter,
    .cartCounter {
      width: 13px;
      height: 13px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 100%;
      z-index: 2;
      opacity: 0.8;
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
        width: 15px;
        height: 15px;
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
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default StyledHeader;
