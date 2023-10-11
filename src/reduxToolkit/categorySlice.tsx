import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../reduxToolkit/app.types';

export interface StateProps {
  categories: Category[];
  errors: string[];
  allUploaded: boolean;
  editCategory: Category;
}
const initialState: StateProps = {
  categories: [],
  errors: [],
  allUploaded: false,
  editCategory: null,
};

const operationSlice = createSlice({
  name: 'operationSlice',
  initialState,
  reducers: {
    setCategories: (state = initialState, action) => {
      state.categories = action.payload;
      state.allUploaded = true;
    },
    setErrors: (state = initialState, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setCategories, setErrors } = operationSlice.actions;
export default operationSlice.reducer;
