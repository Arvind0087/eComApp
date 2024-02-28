import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllProductsAsync,
  getProductsByFilterAsync,
  // getTotalProductCountAsync,
} from "./product.async";

const initialState = {
  productLoader: false,
  productData: [],
  filterLoader: false,
  filterProduct: [],
  // totalProdLoader: false,
  // totalProdCount: "",
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

    // builder.addMatcher(isAnyOf(getTotalProductCountAsync.pending), (state) => {
    //   state.totalProdLoader = true;
    // });
    // builder.addMatcher(
    //   isAnyOf(getTotalProductCountAsync.fulfilled),
    //   (state, action) => {
    //     state.totalProdLoader = false;
    //     state.totalProdCount = action.payload[0]?.totalCount;
    //   }
    // );
    // builder.addMatcher(
    //   isAnyOf(getTotalProductCountAsync.rejected),
    //   (state, action) => {
    //     state.totalProdLoader = false;
    //   }
    // );
  },
  reducers: {
    emptyactivity: (state) => initialState,
  },
});

export const { emptyactivity } = productSlice.actions;
export default productSlice.reducer;
