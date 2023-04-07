import React from "react";
import { Container } from "./styled";
import * as Components from "../components";
import productApi from "../store/apis/productApi";

export const App: React.FC = () => {
  const { data, isLoading } = productApi.useGetProductQuery();

  return (
    <Container>
      <Components.Header />
      {isLoading && <h1 className="loading">Carregando...</h1>}
      {data && <Components.ViewProduct product={data[0]} />}
    </Container>
  );
};
