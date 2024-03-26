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
      state.cartLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getItemsByUserIdAsync.fulfilled),
      (state, action) => {
        state.cartLoader = false;
        state.getItemsByUser = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getItemsByUserIdAsync.rejected),
      (state, action) => {
        state.cartLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(updateQuantityByIdAsync.pending), (state) => {
      state.cartLoader = true;
    });
    builder.addMatcher(
      isAnyOf(updateQuantityByIdAsync.fulfilled),
      (state, action) => {
        state.cartLoader = false;
        state.updateQuantity = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(updateQuantityByIdAsync.rejected),
      (state, action) => {
        state.cartLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(deleteItemByIdAsync.pending), (state) => {
      state.cartLoader = true;
    });
    builder.addMatcher(
      isAnyOf(deleteItemByIdAsync.fulfilled),
      (state, action) => {
        state.cartLoader = false;
        state.deletedItem = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(deleteItemByIdAsync.rejected),
      (state, action) => {
        state.cartLoader = false;
      }
    );
  },
  reducers: {
    emptycart: (state) => {
      // emptycart: (state) => initialState,
      state.cartData = [];
    },
  },
});

export const { emptycart } = cartSlice.actions;

export default cartSlice.reducer;
