import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  justify-content: center;

  .mainWrapper {
    width: 90%;
    margin-top: 50px;
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    color: #474747;
  }

  .itemsWrapper {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3.3%;
  }
`;
