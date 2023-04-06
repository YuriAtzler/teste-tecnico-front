import React from "react";
import {
  Container,
  ContainerDescription,
  ContainerIngredients,
  ContainerOptionNumber,
  ChangeValueOtion,
  MaxIngredients,
  ContainerOptionBoolean,
  ContainerFinishOrder,
} from "./styled";
import {
  IIngredients,
  IItens,
  IProduct,
} from "../../interfaces/productInterface";

import productImage from "../../assets/product.png";

import { MdOutlineRemove, MdAdd } from "react-icons/md";

interface IProps {
  product: IProduct;
}

export const ViewProduct: React.FC<IProps> = ({ product }) => {
  return (
    <Container>
      <ContainerDescription>
        <img src={productImage} alt={product.nm_product} />
        <h1>{product.nm_product}</h1>
        <p>{product.description}</p>
        <div>
          <h2>R${product.vl_discount}</h2>
          <h2>R${product.vl_price}</h2>
        </div>
      </ContainerDescription>
      <ContainerIngredients>
        {product.ingredients.map((item: IIngredients) => {
          if (item.type === "number") return <OptionNumber {...item} />;
          else if (item.type === "boolean") return <OptionBoolean {...item} />;
        })}
        <ContainerFinishOrder>
          <div>
            <MdOutlineRemove className="icon" />
            <p>0</p>
            <MdAdd className="icon" />
          </div>
          <button>Adicionar</button>
        </ContainerFinishOrder>
      </ContainerIngredients>
    </Container>
  );
};

const OptionNumber: React.FC<IIngredients> = (item) => {
  return (
    <ContainerOptionNumber>
      <MaxIngredients>
        <h6>{item.group}</h6>
        <p>Até {item.max_itens} ingredientes.</p>
      </MaxIngredients>
      {item.itens.map((item: IItens) => (
        <ChangeValueOtion key={item.id}>
          <div>
            <h6>{item.nm_item}</h6>
            <p>+ R${item.vl_item}</p>
          </div>
          <div>
            <MdOutlineRemove className="icon" />
            <p>0</p>
            <MdAdd className="icon" />
          </div>
        </ChangeValueOtion>
      ))}
    </ContainerOptionNumber>
  );
};

const OptionBoolean: React.FC<IIngredients> = (item) => {
  return (
    <ContainerOptionBoolean>
      <div>
        <p>{item.group}</p>
      </div>
      <div>
        <p>Sim</p>
        <input type={"checkbox"} />
      </div>
      <div>
        <p>Não</p>
        <input type={"checkbox"} />
      </div>
    </ContainerOptionBoolean>
  );
};
