import { createSlice } from '@reduxjs/toolkit';

interface Production {
  id?: number;
  categorySelect: string;
  productionName: string;
  shortDefinition: string;
  definition: string;
  price: number;
}
export interface StateProps {
  products: Production[];
}
const initialState: StateProps = {
  products: [],
};

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    addProduct: (state = initialState, action) => {
      state.products = [action.payload, ...state.products];
    },
    removeProduct: (state = initialState, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;
export default basketSlice.reducer;
