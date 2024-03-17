import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/product.slice";
import authSlice from "./auth/auth.slice";
import cartSlice from "./cart/cart.slice";
import checkoutSlice from "./checkout/checkout.slice";
import orderSlice from "./order/order.slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
    order: orderSlice,
  },
});
