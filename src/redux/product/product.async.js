import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const createProductAsync = createAsyncThunk(
  "product/createProduct",
  async (payload, toolkit) => {
    return await AxiosClient("POST", `/products`, payload, toolkit);
  }
);

export const getAllProductsAsync = createAsyncThunk(
  "product/getAllProducts",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/products`, [], toolkit);
  }
);

export const getProductsByFilterAsync = createAsyncThunk(
  "product/getProductsByFilter",
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
  "product/getAllCategories",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/categories`, [], toolkit);
  }
);

export const getAllBrandsAsync = createAsyncThunk(
  "product/getAllBrands",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/brands`, [], toolkit);
  }
);

export const getProductByIdAsync = createAsyncThunk(
  "product/getProductById",
  async (payload, toolkit) => {
    return await AxiosClient("GET", `/products?id=${payload.id}`, [], toolkit);
  }
);

export const updateProductAsync = createAsyncThunk(
  "product/updateProduct",
  async (payload, toolkit) => {
    return await AxiosClient(
      "PATCH",
      `/products/${payload.id}`,
      payload,
      toolkit
    );
  }
);
