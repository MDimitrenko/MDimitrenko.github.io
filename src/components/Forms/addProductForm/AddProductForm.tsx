import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './AddProductForm.css';

import { useTranslation } from 'react-i18next';
import { Category, NewProduct, Product } from '../../../reduxToolkit/app.types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reduxToolkit/store';
import { setOpenAddProduct } from '../../../reduxToolkit/productSlice';
import { CategorySelect } from '../../../components/CategorySelect';
import { Select } from 'antd';
import { fetchGetCategories } from '../../../reduxToolkit/categoryThunk';
// eslint-disable-next-line import/named
import { ThunkDispatch } from 'redux-thunk';
// eslint-disable-next-line import/named
import { AnyAction } from '@reduxjs/toolkit';
import { fetchAddProductWithImage, fetchChangeProductWithImage } from '../../../reduxToolkit/productThunk';
// import Modal from 'src/components/modal/modal';

const { Option } = Select;

// eslint-disable-next-line react/prop-types
export const AddProductForm: FC = () => {
  const allCategoryUploaded = useSelector<RootState, boolean>((state) => state.categorySlice.allUploaded);
  type AppDispatch = ThunkDispatch<Product, any, AnyAction>;

  const product = useSelector<RootState, Product>((state) => state.productSlice.editProduct);

  const [categoryId, setCategoryId] = useState(product ? product.category.id : undefined);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (!allCategoryUploaded) {
      dispatch(fetchGetCategories());
    }
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      desc: product ? product.desc : undefined,
      name: product ? product.name : undefined,
      price: product ? product.price : undefined,
      oldPrice: product ? product.oldPrice : undefined,

    },
  });

  interface FormValues {
    name: string;
    desc?: string;
    price: number;
    oldPrice: number;
    photo: string;
    categoryId: string;
  }
  const addProduct: SubmitHandler<FormValues> = (value): void => {
    if (!categoryId) {
      return;
    }
    if (product) {
      const newProduct: NewProduct = {
        id: product.id,
        name: value.name,
        desc: value.desc,
        price: value.price,
        oldPrice: value.oldPrice,
        file: file,
        url: url,
        categoryId: categoryId,
      };

      dispatch(fetchChangeProductWithImage(newProduct));
    } else {
      const newProduct: NewProduct = {
        name: value.name,
        desc: value.desc,
        price: value.price,
        oldPrice: value.oldPrice,
        file: file,
        url: url,
        categoryId: categoryId,
      };

      dispatch(fetchAddProductWithImage(newProduct));
    }
    dispatch(setOpenAddProduct(false));
  };
  const { t } = useTranslation();
  const [selectFile, setSelectFile] = useState(product !== null && product.photo !== null);
  const [file, setFile] = useState(undefined);
  const [url, setUrl] = useState(product !== null ? product.photo : undefined);
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectFile(true);
    setFile(e.target.files[0]);
  };

  const onClickDeleteFile = (): void => {
    setFile(undefined);
    setSelectFile(false);
    setUrl(undefined);
  };
  const handleCloseModal = () => {
    dispatch(setOpenAddProduct(false));
  };
  const categories = useSelector<RootState, Category[]>((state) => state.categorySlice.categories);

  return (
    <>
      <form onSubmit={handleSubmit(addProduct)}>
        <div className="text-field scroll">
          <label className="text-field__label">{t('AddProductForm.category')}</label>

          <CategorySelect
            items={categories}
            onChange={(value) => setCategoryId(value)}
            selectCategory={product ? product.category : null}
          />

          <label className="text-field__label">{t('AddProductForm.productName')}</label>
          <input
            className="text-field__input"
            type="text"
            placeholder={t('AddProductForm.productName')}
            {...register('name', {
              required: t('AddProductForm.error'),
            })}
          />
          <label className="text-field__error-label">{errors.name?.message}</label>

          <label className="text-field__label">{t('AddProductForm.description')}</label>
          <input
            className="text-field__input"
            type="text"
            placeholder={t('AddProductForm.description')}
            {...register('desc')}
          />

          <label className="text-field__label">{t('AddProductForm.price')}</label>
          <input
            className="text-field__input"
            type="number"
            placeholder={t('AddProductForm.price')}
            step="any"
            {...register('price', {
              required: t('AddProductForm.error'),
              min: {
                message: t('AddProductForm.minAmount'),
                value: 0.01,
              },
            })}
          />
          <label className="text-field__error-label">{errors.price?.message}</label>

          <label className="text-field__label">{t('AddProductForm.oldPrice')}</label>
          <input
            className="text-field__input"
            type="number"
            placeholder={t('AddProductForm.oldPrice')}
            step="any"
            {...register('oldPrice', {
              required: t('AddProductForm.error'),
              min: {
                message: t('AddProductForm.minAmount'),
                value: 0.01,
              },
            })}
          />
          <label className="text-field__error-label">{errors.oldPrice?.message}</label>
          <div className="block">
            {!selectFile && (
              <>
                <label className="text-field__label">{t('AddCategoryForm.addImages')}</label>

                <label className="input-file">
                  <input type="file" accept="image/png, image/jpeg" id="categoryPhoto" onChange={onChangeFile} />
                  <span>{t('AddCategoryForm.selectFile')}</span>
                </label>
              </>
            )}
            {selectFile && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                {/*<label className="text-field__file-name">{file ? file.name : url} </label>*/}
                {url && <img src={url} width="70px"></img>}
                {file && <img src={URL.createObjectURL(file)} width="70px" />}
                <input type="button" value="Х" className="button-delete" onClick={() => onClickDeleteFile()} />
              </div>
            )}
          </div>

          <button type="submit" className="button-add">
            {!product && t('AddProductForm.add')}
            {product && t('AddProductForm.change')}
          </button>
          <button className="button-add" onClick={handleCloseModal}>
            Отмена
          </button>
        </div>
      </form>

    </>
  );
};
