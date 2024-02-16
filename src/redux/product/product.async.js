import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const getAllProductsAsync = createAsyncThunk(
  "admin/getAllProducts",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/product`, [], toolkit);
  }
);
