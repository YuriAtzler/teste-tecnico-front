import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addExtraIngredients,
  changeBooleanStatus,
  removeExtraIngredients,
  addOrder,
} from "../../store/slice/productSlice";

import {
  Container,
  ContainerDescription,
  ContainerIngredients,
  ContainerOptionNumber,
  ChangeValueOption,
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
  const [amountOrder, setAmountOrder] = useState<number>(1);
  const dispatch = useDispatch();

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
          if (item.type === "number")
            return <OptionNumber key={item.group} {...item} />;
          else if (item.type === "boolean")
            return <OptionBoolean key={item.group} {...item} />;
        })}
        <ContainerFinishOrder>
          <div>
            <MdOutlineRemove
              className="icon"
              onClick={() => {
                if (amountOrder - 1 != 0) setAmountOrder(amountOrder - 1);
              }}
            />
            <p>{amountOrder}</p>
            <MdAdd
              className="icon"
              onClick={() => setAmountOrder(amountOrder + 1)}
            />
          </div>
          <button onClick={() => dispatch(addOrder())}>Adicionar</button>
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
        <Ingredient key={item.id} {...item} />
      ))}
    </ContainerOptionNumber>
  );
};

const Ingredient: React.FC<IItens> = (item) => {
  const dispatch = useDispatch();
  const productSlice = useSelector((state: RootState) =>
    state.product.optionNumber.filter((element) => element.id === item.id)
  );

  return (
    <ChangeValueOption key={item.id}>
      <div>
        <h6>{item.nm_item}</h6>
        <p>+ R${item.vl_item}</p>
      </div>
      <div>
        <MdOutlineRemove
          className="icon"
          onClick={() => dispatch(removeExtraIngredients(item.id))}
        />
        <p>{productSlice.length > 0 ? productSlice[0].amount : 0}</p>
        <MdAdd
          className="icon"
          onClick={() => dispatch(addExtraIngredients(item))}
        />
      </div>
    </ChangeValueOption>
  );
};

const OptionBoolean: React.FC<IIngredients> = (item) => {
  const dispatch = useDispatch();
  const productSlice = useSelector(
    (state: RootState) => state.product.optionBoolean
  );
  return (
    <ContainerOptionBoolean>
      <div>
        <p>{item.group}</p>
      </div>
      <div>
        <p>Sim</p>
        <input
          type={"checkbox"}
          checked={productSlice}
          onChange={() => dispatch(changeBooleanStatus())}
        />
      </div>
      <div>
        <p>Não</p>
        <input
          type={"checkbox"}
          checked={!productSlice}
          onChange={() => dispatch(changeBooleanStatus())}
        />
      </div>
    </ContainerOptionBoolean>
  );
};
