import { configureStore } from '@reduxjs/toolkit';
import initSlice from './initSlice';
import thunkMiddleware from 'redux-thunk';
import basketSlice from './basketSlice';
import productsReducer from './productsSlice';
import profile from './profile';

export const store = configureStore({
  reducer: {
    initSlice,
    basketSlice,
    profile,
    products: productsReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
