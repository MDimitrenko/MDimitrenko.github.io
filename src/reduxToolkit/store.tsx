import { configureStore } from '@reduxjs/toolkit';
import initSlice from './initSlice';
import thunkMiddleware from 'redux-thunk';
import basketSlice from './basketSlice';

export const store = configureStore({
  reducer: {
    initSlice,
    basketSlice,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
