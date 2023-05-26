import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initial_state = {
  products: [],
  status: "idle",
  error: null,
};

export const productsSlicer = createSlice({
  name: "products",
  initial_state,
  reducers: {},
  extraReducers: builder => {
    builder;
  },
});
