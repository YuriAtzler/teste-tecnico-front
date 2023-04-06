import React from "react";
import { Container, ContainerImages, ContainerOptions } from "./styled";
import * as Components from "../";

import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";

import { MdOutlineShoppingCart, MdOutlineAccountCircle } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <Container>
      <ContainerImages>
        <img src={logo1} />
        <img src={logo2} />
      </ContainerImages>
      <ContainerOptions>
        <select>
          <option>Teste</option>
        </select>
        <input
          type={"text"}
          placeholder="Busque por estabelecimento ou produto"
        />
        <Components.ButtonHeader>
          <MdOutlineAccountCircle />
          <p>Entrar</p>
        </Components.ButtonHeader>
        <Components.ButtonHeader>
          <MdOutlineShoppingCart />
          <p>Carrinho</p>
        </Components.ButtonHeader>
      </ContainerOptions>
    </Container>
  );
};
