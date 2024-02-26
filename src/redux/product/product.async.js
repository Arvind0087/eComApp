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
    let filter = payload?.filterProduct;
    let sort = payload?.sort;

    for (let key in filter) {
      const categoryValues = filter[key];
      if (categoryValues?.length) {
        const lastCategoryValue = categoryValues[categoryValues.length - 1];
        queryString += `${key}=${lastCategoryValue}&`;
      }
    }

    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }

    return await AxiosClient("GET", "/products?" + queryString, [], toolkit);
  }
);
