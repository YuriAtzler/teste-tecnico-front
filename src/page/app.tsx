import React from "react";
import { Container } from "./styled";
import * as Components from "../components";
import productApi from "../store/apis/productApi";
import { IProduct } from "../interfaces/productInterface";

export const App: React.FC = () => {
  const { data, isLoading, isError, error } = productApi.useGetProductQuery();

  return (
    <Container>
      <Components.Header />
      {data && <Components.ViewProduct product={data[0]} />}
    </Container>
  );
};
