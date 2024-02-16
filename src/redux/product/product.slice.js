import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllProductsAsync } from "./product.async";

const initialState = {
  productLoader: false,
  productData: [],
};

export const productSlice = createSlice({
  name: "activity",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(getAllProductsAsync.pending), (state) => {
      state.productLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getAllProductsAsync.fulfilled),
      (state, action) => {
        state.productLoader = false;
        state.productData = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getAllProductsAsync.rejected),
      (state, action) => {
        state.productLoader = false;
      }
    );
  },
  reducers: {
    emptyactivity: (state) => initialState,
  },
});

export const { emptyactivity } = productSlice.actions;
export default productSlice.reducer;
