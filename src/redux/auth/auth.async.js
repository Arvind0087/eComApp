import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (payload, toolkit) => {
    return await AxiosClient("POST", `/users`, payload, toolkit);
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (payload, toolkit) => {
    return await AxiosClient("POST", `/users`, payload, toolkit);
  }
);

export const validateUserAsync = createAsyncThunk(
  "user/validateUser",
  async (payload, toolkit) => {
    return await AxiosClient(
      "GET",
      `/users?email=${payload.email}`,
      [],
      toolkit
    );
  }
);

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
