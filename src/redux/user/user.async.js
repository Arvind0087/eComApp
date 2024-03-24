import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const getAllUserAsync = createAsyncThunk(
  "user/getAllUser",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/users`, [], toolkit);
  }
);

export const getUserByIdAsync = createAsyncThunk(
  "user/getUserById",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/users/${payload.id}`, [], toolkit);
  }
);

export const updateUserByIdAsync = createAsyncThunk(
  "checkout/updateUserById",
  async (payload, toolkit) => {
    return await AxiosClient("PATCH", `/users/${payload.id}`, payload, toolkit);
  }
);
