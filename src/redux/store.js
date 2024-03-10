import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/product.slice";
import authSlice from "./auth/auth.slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
  },
});
