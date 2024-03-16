import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addToCartAsync,
  getItemsByUserIdAsync,
  updateQuantityByIdAsync,
  deleteItemByIdAsync,
} from "./cart.async";

const initialState = {
  cartLoader: false,
  cartData: [],
  itemsByUserLoader: false,
  getItemsByUser: [],
  updateQuantityLoader: false,
  updateQuantity: [],
  deletedLoader: false,
  deletedItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(addToCartAsync.pending), (state) => {
      state.cartLoader = true;
    });
    builder.addMatcher(isAnyOf(addToCartAsync.fulfilled), (state, action) => {
      state.cartLoader = false;
      state.cartData = action.payload;
    });
    builder.addMatcher(isAnyOf(addToCartAsync.rejected), (state, action) => {
      state.cartLoader = false;
    });

    builder.addMatcher(isAnyOf(getItemsByUserIdAsync.pending), (state) => {
      state.itemsByUserLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getItemsByUserIdAsync.fulfilled),
      (state, action) => {
        state.itemsByUserLoader = false;
        state.getItemsByUser = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getItemsByUserIdAsync.rejected),
      (state, action) => {
        state.itemsByUserLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(updateQuantityByIdAsync.pending), (state) => {
      state.updateQuantityLoader = true;
    });
    builder.addMatcher(
      isAnyOf(updateQuantityByIdAsync.fulfilled),
      (state, action) => {
        state.updateQuantityLoader = false;
        state.updateQuantity = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(updateQuantityByIdAsync.rejected),
      (state, action) => {
        state.updateQuantityLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(deleteItemByIdAsync.pending), (state) => {
      state.deletedLoader = true;
    });
    builder.addMatcher(
      isAnyOf(deleteItemByIdAsync.fulfilled),
      (state, action) => {
        state.deletedLoader = false;
        state.deletedItem = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(deleteItemByIdAsync.rejected),
      (state, action) => {
        state.deletedLoader = false;
      }
    );
  },
  reducers: {
    emptycart: (state) => initialState,
  },
});

export const { emptyactivity } = cartSlice.actions;

export default cartSlice.reducer;
