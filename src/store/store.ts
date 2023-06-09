import { configureStore } from "@reduxjs/toolkit";

import productApi from "./apis/productApi";

import productSlice from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
