import { createSlice } from '@reduxjs/toolkit';

export interface Production {
  id: number;
  categorySelect: string;
  productionName: string;
  shortDefinition: string;
  definition: string;
  price: number;
  image: string;
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
      state.products.push(action.payload);
    },
    removeProduct: (state = initialState, action) => {
      state.products.splice(
        state.products.findIndex((item) => item.id === action.payload),
        1
      );
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;
export default basketSlice.reducer;
