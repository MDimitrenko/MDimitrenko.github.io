import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerErrors, Category, CategoryList } from './app.types';
import { setCategories } from '../reduxToolkit/categorySlice';

// eslint-disable-next-line import/named
import { Dispatch } from 'redux';
import { setMessageErrors } from '../reduxToolkit/messageSlice';

interface MyKnownError {
  errorMessage: string;
  // ...
}

export const fetchGetCategories = createAsyncThunk<void, void, { rejectValue: MyKnownError }>(
  'categorySlice/fetchGetCategories',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: JSON.stringify(params),
      };
      fetch('http://19429ba06ff2.vps.myjino.ru/api/categories', requestOptions)
        .then(async (response) => {
          if (response.ok) {
            const categories: CategoryList = (await response.json()) as CategoryList;
            dispatch(setCategories(categories.data));
          }
          // check for error response
          if (!response.ok) {
            const error: ServerErrors = (await response.json()) as ServerErrors;
            dispatch(
              setMessageErrors({
                caption: 'Ошибка получения категорий',
                errors: error,
                messageType: 'Error',
              })
            );
          }
        })
        .catch((error) => {
          dispatch(
            setMessageErrors({
              caption: 'Ошибка получения категорий',
              text: error.message,
              messageType: 'Error',
            })
          );
        });
    } catch (error) {
      dispatch(
        setMessageErrors({
          caption: 'Ошибка получения категорий',
          text: error.message,
          messageType: 'Error',
        })
      );
    }
  }
);
