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

export const getAllOrdersAsync = createAsyncThunk(
  "product/getAllOrders",
  async (payload, toolkit) => {
    let sort = payload?.sort;
    let pagination = payload?.pagination;
    let queryString = "";

    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }
    for (let key in pagination) {
      queryString += `${key}=${pagination[key]}&`;
    }

    return await AxiosClient("GET", "/orders?" + queryString, [], toolkit);
  }
);

export const updateOrderAsync = createAsyncThunk(
  "order/updateOrder",
  async (payload, toolkit) => {
    return await AxiosClient(
      "PATCH",
      `/orders/${payload.id}`,
      payload,
      toolkit
    );
  }
);
