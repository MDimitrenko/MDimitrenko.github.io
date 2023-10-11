import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerErrors, Product, NewProduct, UploadFile } from './app.types';
import { addProduct, setErrors, updateProduct } from '../reduxToolkit/productSlice';
import { setMessageErrors } from '../reduxToolkit/messageSlice';
// eslint-disable-next-line import/named
import { Dispatch } from 'redux';

interface MyKnownError {
  errorMessage: string;
  // ...
}
const fetchAddProduct = (newProduct: NewProduct, url: string, dispatch: Dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({
      name: newProduct.name,
      photo: url,
      desc: newProduct.desc,
      price: newProduct.price,
      oldPrice: newProduct.oldPrice,
      categoryId: newProduct.categoryId,
    }),
  };
  fetch('http://19429ba06ff2.vps.myjino.ru/api/products', requestOptions)
    .then(async (response) => {
      if (response.ok) {
        const product: Product = (await response.json()) as Product;
        dispatch(addProduct(product));
      }
      // check for error response
      if (!response.ok) {
        const error: ServerErrors = (await response.json()) as ServerErrors;
        dispatch(
          setMessageErrors({
            caption: 'Ошибка добавления категории',
            errors: error,
            messageType: 'Error',
          })
        );
      }
    })
    .catch((error) => {
      dispatch(
        setMessageErrors({
          caption: 'Ошибка добавления категории',
          text: error.message,
          messageType: 'Error',
        })
      );
    });
};

export const fetchChangeProductWithImage = createAsyncThunk<void, NewProduct, { rejectValue: MyKnownError }>(
  'operationSlice/fetchChangeCategoryWithImage',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      if (params.file) {
        fetchChangeUpload(params, dispatch);
      } else {
        fetchChangeProduct(params, dispatch);
      }
    } catch (error) {
      return error.message;
    }
  }
);
export const fetchAddProductWithImage = createAsyncThunk<void, NewProduct, { rejectValue: MyKnownError }>(
  'operationSlice/fetchAddOperation',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      if (params.file) {
        fetchUpload(params.file, params, dispatch);
      } else {
        fetchAddProduct(params, null, dispatch);
      }
    } catch (error) {
      return error.message;
    }
  }
);

const fetchUpload = (file: File, newProduct: NewProduct, dispatch: Dispatch) => {
  const fileBody = new FormData();
  fileBody.append('file', file);
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: fileBody,
  };
  fetch('http://19429ba06ff2.vps.myjino.ru/api/upload', requestOptions)
    .then(async (response) => {
      if (response.ok) {
        const uploadFile: UploadFile = (await response.json()) as UploadFile;
        fetchAddProduct(newProduct, uploadFile.url, dispatch);
      }
      // check for error response
      if (!response.ok) {
        const error: ServerErrors = (await response.json()) as ServerErrors;
        dispatch(
          setMessageErrors({
            caption: 'Ошибка загрузки файла',
            errors: error,
            messageType: 'Error',
          })
        );
      }
    })
    .catch((error) => {
      dispatch(
        setMessageErrors({
          caption: 'Ошибка загрузки файла',
          text: error.message,
          messageType: 'Error',
        })
      );
    });
};
const fetchChangeUpload = (newProduct: NewProduct, dispatch: Dispatch) => {
  const fileBody = new FormData();
  fileBody.append('file', newProduct.file);
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: fileBody,
  };
  fetch('http://19429ba06ff2.vps.myjino.ru/api/upload', requestOptions)
    .then(async (response) => {
      if (response.ok) {
        const uploadFile: UploadFile = (await response.json()) as UploadFile;
        newProduct.url = uploadFile.url;
        fetchChangeProduct(newProduct, dispatch);
      }
      // check for error response
      if (!response.ok) {
        const error: ServerErrors = (await response.json()) as ServerErrors;
        dispatch(
          setMessageErrors({
            caption: 'Ошибка загрузки файла',
            errors: error,
            messageType: 'Error',
          })
        );
      }
    })
    .catch((error) => {
      dispatch(
        setMessageErrors({
          caption: 'Ошибка загрузки файла',
          errors: error,
          messageType: 'Error',
        })
      );
    });
};

const fetchChangeProduct = (newProduct: NewProduct, dispatch: Dispatch) => {
    console.log(newProduct)
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({
      name: newProduct.name,
      photo: newProduct.url,
      desc: newProduct.desc,
      price: newProduct.price,
      oldPrice: newProduct.oldPrice,
      categoryId: newProduct.categoryId,
    }),
  };
  fetch('http://19429ba06ff2.vps.myjino.ru/api/products/' + newProduct.id, requestOptions)
    .then(async (response) => {
      if (response.ok) {
        const product: Product = (await response.json()) as Product;
        dispatch(updateProduct(product));
      }
      // check for error response
      if (!response.ok) {
        const error: ServerErrors = (await response.json()) as ServerErrors;
        dispatch(
          setMessageErrors({
            caption: 'Ошибка обновления категории',
            errors: error,
            messageType: 'Error',
          })
        );
      }
    })
    .catch((error) => {
      dispatch(
        setMessageErrors({
          caption: 'Ошибка обновления категории',
          text: error.message,
          messageType: 'Error',
        })
      );
    });
};
