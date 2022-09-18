/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    const response = await axios.get('http://localhost:5000/items');
    console.log(response);
    return response?.data;
  },
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = productSlice.actions;

export default productSlice.reducer;
