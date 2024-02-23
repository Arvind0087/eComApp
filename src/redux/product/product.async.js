import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const getAllProductsAsync = createAsyncThunk(
  "admin/getAllProducts",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/products`, [], toolkit);
  }
);

export const getProductsByFilterAsync = createAsyncThunk(
  "admin/getProductsByFilter",
  async (payload, toolkit) => {
    let queryString = "";
    for (let key in payload) {
      queryString += `${key}=${payload[key]}&`;
    }
    console.log("queryString...", queryString)

    return await AxiosClient("GET", "/products?" + queryString, [], toolkit);
  }
);
