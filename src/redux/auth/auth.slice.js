import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  createUserAsync,
  validateUserAsync,
  getAllUserAsync,
} from "./auth.async";

const initialState = {
  signupLoader: false,
  createSignup: null,
  validateLoadde: false,
  validateUser: [],
  allUerLoader: false,
  getUsers: [],
};

export const authSlice = createSlice({
  name: "activity",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(createUserAsync.pending), (state) => {
      state.signupLoader = true;
    });
    builder.addMatcher(isAnyOf(createUserAsync.fulfilled), (state, action) => {
      state.signupLoader = false;
      state.createSignup = action.payload;
    });
    builder.addMatcher(isAnyOf(createUserAsync.rejected), (state, action) => {
      state.signupLoader = false;
    });

    builder.addMatcher(isAnyOf(validateUserAsync.pending), (state) => {
      state.validateLoadde = true;
    });
    builder.addMatcher(
      isAnyOf(validateUserAsync.fulfilled),
      (state, action) => {
        state.validateLoadde = false;
        state.validateUser = action.payload;
      }
    );
    builder.addMatcher(isAnyOf(validateUserAsync.rejected), (state, action) => {
      state.validateLoadde = false;
    });

    builder.addMatcher(isAnyOf(getAllUserAsync.pending), (state) => {
      state.allUerLoader = true;
    });
    builder.addMatcher(isAnyOf(getAllUserAsync.fulfilled), (state, action) => {
      state.allUerLoader = false;
      state.getUsers = action.payload;
    });
    builder.addMatcher(isAnyOf(getAllUserAsync.rejected), (state, action) => {
      state.allUerLoader = false;
    });
  },
  reducers: {
    emptyactivity: (state) => initialState,
  },
});

export const { emptyactivity } = authSlice.actions;
export default authSlice.reducer;
