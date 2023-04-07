import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .icon-header {
    font-size: 30px;
    color: #ed3237;

    @media screen and (max-width: 1050px) {
      font-size: 25px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #ed3237;
  }

  .counter-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #f09035;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 65px;

    p {
      font-size: 12px;
      color: #fff;
    }
  }
`;
