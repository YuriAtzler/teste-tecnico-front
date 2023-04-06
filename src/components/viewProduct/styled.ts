import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-around;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem;
  justify-content: space-between;

  img {
    width: 100%;
  }

  h1 {
    font-size: 28px;
    font-weight: 500;
    color: #4e4e4e;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #4e4e4e;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
      color: #dc6e05;
      font-size: 32px;
      font-weight: 400;
    }

    h2:last-child {
      color: #4e4e4e;
      text-decoration: line-through;
    }
  }
`;

export const ContainerIngredients = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  border: 2px solid #c6c6c6;
  border-radius: 10px;
  padding: 2rem;
`;

export const ContainerFinishOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  button {
    width: 60%;
    height: 40px;
    border: none;
    border-radius: 3px;
    background-color: #f09035;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    border: 1px solid #f09035;
    border-radius: 5px;
    height: 100%;
    width: 35%;

    .icon {
      color: #d80000;
      width: 20px;
      height: 20px;

      :hover {
        cursor: pointer;
        background-color: #f4f4f4;
        border-radius: 100%;
      }
    }

    p {
      font-size: 14px;
      color: #4e4e4e;
      font-weight: 400;
    }
  }
`;

// option number
export const ContainerOptionNumber = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MaxIngredients = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff7cf;
  padding: 0.5rem 1rem;
  gap: 0.25rem;

  h6 {
    font-size: 14px;
    font-weight: 500;
    color: #4e4e4e;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #e49700;
  }
`;

export const ChangeValueOtion = styled.div`
  display: flex;
  margin: 0rem 0.75rem;
  border-bottom: 1px solid #e8a634;
  justify-content: space-between;
  padding: 1rem 0;

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;

    h6 {
      font-size: 14px;
      font-weight: 500;
      color: #4e4e4e;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      color: #f09035;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    border: 1px solid #f09035;
    border-radius: 5px;

    .icon {
      color: #d80000;
      width: 20px;
      height: 20px;

      :hover {
        cursor: pointer;
        background-color: #f4f4f4;
        border-radius: 100%;
      }
    }

    p {
      font-size: 14px;
      color: #4e4e4e;
      font-weight: 400;
    }
  }
`;

// option boolean
export const ContainerOptionBoolean = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1rem;

  div:first-child {
    width: 100%;
    padding: 1rem 1rem;
    background-color: #fff7cf;
    p {
      color: #4e4e4e;
      font-size: 14px;
      font-weight: 500;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    input {
      border-radius: 50%;
      width: 1.2em;
      height: 1.2em;
      border: 2px solid #ccc;
    }
  }
`;
