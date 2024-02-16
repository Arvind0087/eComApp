import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import productSlice from "./product/product.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice,
  },
});
