import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  Container,
  ContainerImages,
  ContainerOptions,
  ContainerPopover,
} from "./styled";
import * as Components from "../";

import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";

import {
  MdOutlineShoppingCart,
  MdOutlineAccountCircle,
  MdKeyboardArrowDown,
  MdArrowBackIosNew,
} from "react-icons/md";
import { IItens } from "../../interfaces/productInterface";

export const Header: React.FC = () => {
  const productSlice = useSelector((state: RootState) => state.product);

  return (
    <Container>
      <MdArrowBackIosNew className="arrow-back" />
      <ContainerImages>
        <img src={logo1} />
        <img src={logo2} />
      </ContainerImages>
      <ContainerOptions>
        <div>
          <div>
            <h6>Entrega:</h6>
            <p>R. Antonio Braune, 222</p>
          </div>
          <MdKeyboardArrowDown className="icon-keyboard-down" />
        </div>
        <input
          type={"text"}
          placeholder="Busque por estabelecimento ou produto"
        />
        <Components.ButtonHeader>
          <MdOutlineAccountCircle className="icon-header" />
          <p>Entrar</p>
        </Components.ButtonHeader>
        <Components.ButtonHeader>
          <MdOutlineShoppingCart className="icon-header" />
          <p>Carrinho</p>
          {productSlice.status ? (
            <>
              <div className="counter-cart">
                <p>1</p>
              </div>
              <Popover itens={productSlice.optionNumber} />
            </>
          ) : (
            <></>
          )}
        </Components.ButtonHeader>
      </ContainerOptions>
    </Container>
  );
};

interface IProps {
  itens: { id: number; amount: number; nm_item: string }[];
}

const Popover: React.FC<IProps> = ({ itens }) => {
  return (
    <ContainerPopover>
      <div>
        <p>Adicionado com sucesso</p>
      </div>
      <div>
        <h6>Oferta Cheddar Bacon</h6>
        <p>Ingredientes:</p>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>{`${item.amount} ${item.nm_item}`}</li>
          ))}
        </ul>
      </div>
    </ContainerPopover>
  );
};
