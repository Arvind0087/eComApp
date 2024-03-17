import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const createOrderAsync = createAsyncThunk(
  "cart/createOrder",
  async (payload, toolkit) => {
    return await AxiosClient("POST", `/orders`, payload, toolkit);
  }
);
