import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../AxiosClient";

export const addAddressByUserIdAsync = createAsyncThunk(
  "checkout/addAddressByUserId",
  async (payload, toolkit) => {
    return await AxiosClient(
      "PATCH",
      `/users/${payload.id}`,
      { addresses: payload?.address },
      toolkit
    );
  }
);
