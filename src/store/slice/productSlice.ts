import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItens } from "../../interfaces/productInterface";

interface IExtraIngredients {
  id: number;
  amount: number;
  nm_item: string;
}

interface IProps {
  optionNumber: IExtraIngredients[];
  optionBoolean: boolean;
  status: boolean;
}

const initialState: IProps = {
  optionNumber: [],
  optionBoolean: false,
  status: false,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addExtraIngredients(state, action: PayloadAction<IItens>) {
      let maxIngredients = state.optionNumber.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
      if (maxIngredients <= 7) {
        let alreadyExist = state.optionNumber.findIndex(
          (element: IExtraIngredients) => element.id == action.payload.id
        );
        if (alreadyExist != -1) state.optionNumber[alreadyExist].amount += 1;
        else state.optionNumber.push({ ...action.payload, amount: 1 });
      }
    },
    removeExtraIngredients(state, action: PayloadAction<number>) {
      let exist = state.optionNumber.findIndex(
        (element: IExtraIngredients) => element.id == action.payload
      );
      if (exist != -1 && state.optionNumber[exist].amount - 1 !== 0)
        state.optionNumber[exist].amount -= 1;
      else if (exist) state.optionNumber.splice(exist, 1);
    },
    changeBooleanStatus(state) {
      state.optionBoolean = !state.optionBoolean;
    },
    addOrder(state) {
      state.status = true;
    },
  },
});

export const {
  addExtraIngredients,
  changeBooleanStatus,
  removeExtraIngredients,
  addOrder,
} = productSlice.actions;
export default productSlice;
