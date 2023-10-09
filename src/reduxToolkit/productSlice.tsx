import { createSlice } from '@reduxjs/toolkit';
import { Product } from './app.types';

export interface StateProps {
  data: Product[];
  loading: boolean;
  errors: string[];
  openAddProduct: boolean;
  editProduct: Product;
}
const initialState: StateProps = {
  data: [],
  loading: false,
  errors: null,
  openAddProduct: false,
  editProduct: null,
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state = initialState, action) => {
      state.data = [...state.data, ...action.payload];
    },
    addProduct: (state = initialState, action) => {
      state.data.push(action.payload);
      // подумать над сортировкой
    },

    updateProduct: (state = initialState, action) => {
      const index = state.data.findIndex((op) => op.id === action.payload.id);
      state.data[index] = action.payload;
    },
    setErrors: (state = initialState, action) => {
      state.errors = action.payload;
    },
    setOpenAddProduct: (state = initialState, action) => {
      state.openAddProduct = action.payload;
      if (!action.payload) {
        state.editProduct = null;
      }
    },
    setEditProduct: (state = initialState, action) => {
      state.editProduct = state.data.filter((p) => p.id === action.payload)[0];
      // подумать над сортировкой
    },
  },
});

export const { addProducts, addProduct, updateProduct, setErrors, setOpenAddProduct, setEditProduct } =
  productSlice.actions;
export default productSlice.reducer;
