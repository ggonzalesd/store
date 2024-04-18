import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

export const standSlice = createSlice({
  name: 'stand',
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
      state.products = [];
      state.error = false;
    },
    setProducts: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    setError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { setLoading, setProducts, setError } = standSlice.actions;
