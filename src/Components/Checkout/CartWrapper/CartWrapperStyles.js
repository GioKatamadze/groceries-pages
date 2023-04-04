import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: max-content;
  justify-content: center;
  display: ${(props) => (props.isSearching ? "none" : "flex")};

  .mainWrapper {
    width: 90%;
    margin-top: 20px;
  }

  h2 {
    font-weight: 700;
    font-size: 22px;
    color: #474747;
  }

  .itemsWrapper {
    margin-bottom: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .itemsWrapper2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  .offerSectionTitle {
    display: ${(props) =>
      props.freeColaCount === 0 && props.freeCoffeeCount === 0
        ? "none"
        : "block"};
  }

  @media only screen and (min-width: 1024px) {
    .mainWrapper {
      margin-top: 50px;
    }

    h2 {
      font-size: 32px;
    }

    .itemsWrapper2 {
      margin-top: -40px;
    }
  }
`;
