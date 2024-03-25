import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  createOrderAsync,
  getLoggedInUserOrderAsync,
  fetchAllOrders,
  getAllOrdersAsync,
  updateOrderAsync,
} from "./order.async";

const initialState = {
  createOrderLoader: false,
  createOrder: [],
  ordersLoader: false,
  orders: [],
  getAllLoader: false,
  allOrders: [],
  totalOrders: 0,
  updateOrderLoader: false,
  updatedOrder: [],
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
    builder.addMatcher(
      isAnyOf(getLoggedInUserOrderAsync.fulfilled),
      (state, action) => {
        state.ordersLoader = false;
        state.orders = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getLoggedInUserOrderAsync.rejected),
      (state, action) => {
        state.ordersLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(getAllOrdersAsync.pending), (state) => {
      state.getAllLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getAllOrdersAsync.fulfilled),
      (state, action) => {
        state.getAllLoader = false;
        state.allOrders = action.payload;
      }
    );
    builder.addMatcher(isAnyOf(getAllOrdersAsync.rejected), (state, action) => {
      state.getAllLoader = false;
    });

    builder.addMatcher(isAnyOf(updateOrderAsync.pending), (state) => {
      state.updateOrderLoader = true;
    });
    builder.addMatcher(isAnyOf(updateOrderAsync.fulfilled), (state, action) => {
      state.updateOrderLoader = false;
      state.updatedOrder = action.payload;
    });
    builder.addMatcher(isAnyOf(updateOrderAsync.rejected), (state, action) => {
      state.updateOrderLoader = false;
    });
  },
  reducers: {
    emptyorder: (state) => initialState,
  },
});

export const { emptyactivity } = orderSlice.actions;

// export const selectTotalOrders = (state) => state.order;
// export const selectOrders = (state) => state.order;

export default orderSlice.reducer;
