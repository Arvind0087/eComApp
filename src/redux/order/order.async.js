import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (payload, toolkit) => {
    return await AxiosClient("POST", `/orders`, payload, toolkit);
  }
);

export const getLoggedInUserOrderAsync = createAsyncThunk(
  "order/getLoggedInUserOrder",
  async (payload, toolkit) => {
    return await AxiosClient(
      "GET",
      `/orders?user.id=${payload.id}`,
      payload,
      toolkit
    );
  }
);
