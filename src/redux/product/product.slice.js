import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllProductsAsync, getProductsByFilterAsync } from "./product.async";

const initialState = {
  productLoader: false,
  productData: [],
  filterLoader: false,
  filterProduct: [],
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

    builder.addMatcher(isAnyOf(getProductsByFilterAsync.pending), (state) => {
      state.filterLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getProductsByFilterAsync.fulfilled),
      (state, action) => {
        state.filterLoader = false;
        state.productData = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getProductsByFilterAsync.rejected),
      (state, action) => {
        state.filterLoader = false;
      }
    );
  },
  reducers: {
    emptyactivity: (state) => initialState,
  },
});

export const { emptyactivity } = productSlice.actions;
export default productSlice.reducer;
