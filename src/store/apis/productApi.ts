import { IProduct } from "./../../interfaces/productInterface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct[], void>({
      query: () => "products",
      providesTags: ["product"],
    }),
  }),
});

export default productApi;
