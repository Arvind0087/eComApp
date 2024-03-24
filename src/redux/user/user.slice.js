import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllUserAsync,
  getUserByIdAsync,
  updateUserByIdAsync,
} from "./user.async";

const initialState = {
  allUerLoader: false,
  getUsers: [],
  getUserByIdLoader: false,
  getUserById: [],
  updatedUserLoader: false,
  updatedUser: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
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

    builder.addMatcher(isAnyOf(getUserByIdAsync.pending), (state) => {
      state.getUserByIdLoader = true;
    });
    builder.addMatcher(isAnyOf(getUserByIdAsync.fulfilled), (state, action) => {
      state.getUserByIdLoader = false;
      state.getUserById = action.payload;
    });
    builder.addMatcher(isAnyOf(getUserByIdAsync.rejected), (state, action) => {
      state.getUserByIdLoader = false;
    });

    builder.addMatcher(isAnyOf(updateUserByIdAsync.pending), (state) => {
      state.updatedUserLoader = true;
    });
    builder.addMatcher(
      isAnyOf(updateUserByIdAsync.fulfilled),
      (state, action) => {
        state.updatedUserLoader = false;
        state.updatedUser = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(updateUserByIdAsync.rejected),
      (state, action) => {
        state.updatedUserLoader = false;
      }
    );
  },
  reducers: {
    emptyactivity: (state) => initialState,
  },
});

export const { emptyactivity } = userSlice.actions;
export default userSlice.reducer;
