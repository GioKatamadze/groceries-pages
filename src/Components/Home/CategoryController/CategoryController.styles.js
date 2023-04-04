import styled from "styled-components";

const CategoriesWrapper = styled.div`
  width: 100vw;
  height: max-content;
  margin-top: 30px;
  display: flex;
  justify-content: center;

  .mainWrapper {
    width: 90vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
  }

  .button {
    height: 20px;
    padding: 7px 20px;
    background: #ffffff;
    border: 1px solid rgba(190, 190, 190, 0.5);
    box-shadow: 5px 5px 20px rgba(181, 181, 181, 0.2);
    border-radius: 30px;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    color: #474747;
    transition: 0.15s;

    :hover {
      cursor: pointer;
      border: 1px solid rgba(190, 190, 190, 1);
      box-shadow: 5px 5px 20px rgba(181, 181, 181, 0.5);
    }
  }

  @media only screen and (min-width: 1024px) {
    .mainWrapper {
      gap: 8px;
    }

    .button {
      height: 30px;
      padding: 10px 20px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 60px;
    margin-top: 40px;

    .mainWrapper {
      flex-wrap: nowrap;
      gap: 20px;
    }

    .button {
      padding: 10px 30px;
      font-size: 24px;
      line-height: 27px;
    }
  }
`;

export default CategoriesWrapper;
