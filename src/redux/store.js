import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/product.slice";
import authSlice from "./auth/auth.slice";
import cartSlice from "./cart/cart.slice";
import orderSlice from "./order/order.slice";
import userSlice from "./user/user.slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    cart: cartSlice,
    order: orderSlice,
    user: userSlice,
  },
});
