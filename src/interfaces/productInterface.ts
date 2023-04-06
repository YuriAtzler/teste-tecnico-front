export interface IItens {
  id: number;
  nm_item: string;
  vl_item: number;
}

export interface IIngredients {
  group: string;
  max_itens: string;
  type: string;
  itens: IItens[];
}

export interface IProduct {
  id: string;
  createdAt: string;
  nm_product: string;
  description: string;
  vl_price: string;
  vl_discount: string;
  url_image: string;
  ingredients: IIngredients[];
}
