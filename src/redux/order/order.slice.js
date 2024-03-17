import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createOrderAsync } from "./order.async";

const initialState = {
  createOrderLoader: false,
  createOrder: [],
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
  },
  reducers: {
    emptyorder: (state) => initialState,
  },
});

export const { emptyactivity } = orderSlice.actions;

export default orderSlice.reducer;
