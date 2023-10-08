import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addProducts: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
