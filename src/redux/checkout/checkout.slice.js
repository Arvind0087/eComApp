import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addAddressByUserIdAsync } from "./checkout.async";

const initialState = {
  addAddressLoader: false,
  addAddress: [],
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(addAddressByUserIdAsync.pending), (state) => {
      state.addAddressLoader = true;
    });
    builder.addMatcher(
      isAnyOf(addAddressByUserIdAsync.fulfilled),
      (state, action) => {
        state.addAddressLoader = false;
        state.addAddress = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(addAddressByUserIdAsync.rejected),
      (state, action) => {
        state.addAddressLoader = false;
      }
    );
  },
  reducers: {
    emptycart: (state) => initialState,
  },
});

export const { emptyactivity } = checkoutSlice.actions;

export default checkoutSlice.reducer;
