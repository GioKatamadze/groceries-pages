import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: max-content;
  justify-content: center;
  display: ${(props) =>
    props.category !== "all" || props.isSearching ? "none" : "flex"};

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
    gap: 2%;
  }

  @media only screen and (min-width: 600px) {
    .itemsWrapper {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .mainWrapper {
      margin-top: 50px;
    }

    h2 {
      font-size: 32px;
    }

    .itemsWrapper {
      gap: 3.5%;
    }
  }
`;
