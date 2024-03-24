import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createOrderAsync, getLoggedInUserOrderAsync } from "./order.async";

const initialState = {
  createOrderLoader: false,
  createOrder: [],
  ordersLoader:false,
  orders:[]
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {

    builder.addMatcher(isAnyOf(createOrderAsync.pending), (state) => {
      state.createOrderLoader = true;
    });
    builder.addMatcher(isAnyOf(createOrderAsync.fulfilled), (state, action) => {
      state.createOrderLoader = false;
      state.createOrder = action.payload;
    });
    builder.addMatcher(isAnyOf(createOrderAsync.rejected), (state, action) => {
      state.createOrderLoader = false;
    });

    builder.addMatcher(isAnyOf(getLoggedInUserOrderAsync.pending), (state) => {
      state.ordersLoader = true;
    });
    builder.addMatcher(isAnyOf(getLoggedInUserOrderAsync.fulfilled), (state, action) => {
      state.ordersLoader = false;
      state.orders = action.payload;
    });
    builder.addMatcher(isAnyOf(getLoggedInUserOrderAsync.rejected), (state, action) => {
      state.ordersLoader = false;
    });
  },
  reducers: {
    emptyorder: (state) => initialState,
  },
});

export const { emptyactivity } = orderSlice.actions;

export default orderSlice.reducer;
