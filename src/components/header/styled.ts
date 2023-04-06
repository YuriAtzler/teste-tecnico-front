import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100%;
  height: 10vh;
  background-color: #f4f4f4;
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
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;

  input {
    border: 1px solid #ed3237;
    border-radius: 5px;
    height: 70%;
    width: 300px;
    padding: 1rem;
  }
`;
