import { configureStore } from '@reduxjs/toolkit';
import initSlice from './initSlice';
import thunkMiddleware from 'redux-thunk';
import basketSlice from './basketSlice';
import profile from './profile';
import productSlice from './productSlice';
import categorySlice from './categorySlice';

export const store = configureStore({
  reducer: {
    initSlice,
    basketSlice,
    profile,
    productSlice,
    categorySlice,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
