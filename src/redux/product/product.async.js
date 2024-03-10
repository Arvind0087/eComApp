import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

// export const getTotalProductCountAsync = createAsyncThunk(
//   "user/getTotalProductCount",
//   async (payload, toolkit) => {
//     return await AxiosClient("GET", `/total`, [], toolkit);
//   }
// );

export const getAllProductsAsync = createAsyncThunk(
  "user/getAllProducts",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/products`, [], toolkit);
  }
);

export const getProductsByFilterAsync = createAsyncThunk(
  "user/getProductsByFilter",
  async (payload, toolkit) => {
    let queryString = "";
    let filter = payload?.filterProduct;
    let pagination = payload?.pagination;

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

    for (let key in pagination) {
      queryString += `${key}=${pagination[key]}&`;
    }

    return await AxiosClient("GET", "/products?" + queryString, [], toolkit);
  }
);

export const getAllCategoriesAsync = createAsyncThunk(
  "user/getAllCategories",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/categories`, [], toolkit);
  }
);

export const getAllBrandsAsync = createAsyncThunk(
  "user/getAllBrands",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/brands`, [], toolkit);
  }
);
