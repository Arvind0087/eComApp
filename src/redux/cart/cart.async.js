import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (payload, toolkit) => {
    return await AxiosClient("POST", `/cart`, payload, toolkit);
  }
);

export const getItemsByUserIdAsync = createAsyncThunk(
  "cart/getItemsByUserId",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/cart?user=${payload.id}`, [], toolkit);
  }
);

export const updateQuantityByIdAsync = createAsyncThunk(
  "cart/updateQuantityById",
  async (payload, toolkit) => {
    return await AxiosClient(
      "PATCH",
      `/cart/${payload.id}`,
      { quantity: payload?.quantity },
      toolkit
    );
  }
);

export const deleteItemByIdAsync = createAsyncThunk(
  "cart/updateQuantityById",
  async (payload, toolkit) => {
    return await AxiosClient(
      "DELETE",
      `/cart/${payload.id}`,
      { id: payload?.id },
      toolkit
    );
  }
);
