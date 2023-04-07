import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  max-width: 100%;
  height: 10vh;
  background-color: #f4f4f4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  position: relative;

  .arrow-back {
    position: absolute;
    left: 10%;
    color: #686868;
    display: none;
  }

  @media screen and (max-width: 550px) {
    justify-content: center;

    .arrow-back {
      display: flex;
    }
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 55%;

  img {
    height: 100%;
  }

  @media screen and (max-width: 1050px) {
    img {
      height: 85%;
    }
  }

  @media screen and (max-width: 550px) {
    img {
      height: 100%;
    }
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  position: relative;

  @media screen and (max-width: 550px) {
    display: none;
  }

  div:first-child {
    display: flex;
    align-items: center;
    height: 70%;
    width: 250px;
    padding: 0.5rem;
    background-color: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 1050px) {
      width: 200px;
    }

    @media screen and (max-width: 900px) {
      display: none;
    }

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }

    .icon-keyboard-down {
      font-size: 30px;
      color: #d80000;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      box-shadow: none;

      h6 {
        font-size: 16px;
        color: #d80000;
        font-weight: 400;
      }

      p {
        font-size: 12px;
        color: #656363;
        font-weight: 700;
      }
    }
  }

  input {
    border: 1px solid #ed3237;
    border-radius: 5px;
    height: 70%;
    width: 300px;
    padding: 1rem;

    @media screen and (max-width: 1050px) {
      width: 250px;
      font-size: 12px;
    }

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

//Popover
export const ContainerPopover = styled.div`
  width: 208px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  top: 90%;
  right: -10px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  div:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f09035;
    border-radius: 4px 4px 0px 0px;

    p {
      color: #fff;
      font-weight: 700;
      font-size: 16px;
    }

    :after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid #f09035;
      top: -10px;
      left: 65%;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 0.25rem;
    border-radius: 4px;

    h6 {
      font-size: 14px;
      font-weight: 700;
      color: #bc2e31;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: #4e4e4e;
    }

    li {
      font-size: 12px;
      font-weight: 400;
      color: #4e4e4e;
      margin-left: 20px;
    }
  }
`;
