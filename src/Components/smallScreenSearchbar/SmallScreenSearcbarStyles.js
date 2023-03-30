import styled from "styled-components";

const MobileSearchWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  z-index: 1;

  img {
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0.5);
    right: 5vw;
  }

  @media only screen and (min-width: 600px) {
    height: 50px;
    img {
      right: 6vw;
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export default MobileSearchWrapper;
