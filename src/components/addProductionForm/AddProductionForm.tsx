import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './AddProductionForm.css';

export interface AddProductionFormProps {
  category?: string;
  productionName?: string;
  shortDefinition?: string;
  definition?: string;
  price?: number;
  images?: ImageItem[];
}
interface ImageItem {
  id: number;
  imageKey: string;
  fileName?: string;
  selectedFile: boolean;
}
// eslint-disable-next-line react/prop-types
export const AddProductionForm: FC<AddProductionFormProps> = ({
  category,
  productionName,
  shortDefinition,
  definition,
  price,
  images = [],
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      categorySelect: category,
      productionName: productionName,
      shortDefinition: shortDefinition,
      definition: definition,
      price: price,
    },
  });
  const emptyFile = (): ImageItem => {
    return {
      id: 1,
      imageKey: 'image1',
      selectedFile: false,
    };
  };
  interface FormValues {
    categorySelect: string;
    productionName: string;
    shortDefinition: string;
    definition: string;
    price: number;
  }
  const addProduct: SubmitHandler<FormValues> = (value): void => {
    console.log('Отправляем данные формы');
    console.log(value);
    console.log(imageList);
    reset();
    setImageList(() => [emptyFile()]);
  };

  const [imageList, setImageList] = useState([emptyFile(), ...images]);
  const onChangeFile = (imageKey: string): void => {
    const updateList = imageList.map((image) => {
      if (image.imageKey === imageKey) {
        console.log(imageKey);
        const imageElement = document.getElementById(imageKey) as HTMLInputElement;
        console.log(imageElement.files[0].name);

        return { ...image, selectedFile: true, fileName: imageElement.files[0].name };
      }
      return image;
    });
    if (updateList[updateList.length - 1].selectedFile) {
      const maxId = Math.max(...updateList.map((image) => image.id)) + 1;
      updateList[updateList.length] = {
        id: maxId,
        imageKey: 'image' + maxId,
        selectedFile: false,
      };
    }
    console.log(updateList);
    setImageList(() => updateList);
  };
  const onClickDeleteFile = (id: number): void => {
    console.log(imageList);
    const updateList = imageList.filter((image) => image.id !== id);
    console.log(updateList);
    setImageList(() => updateList);
  };

  const imageListBlock = (imageList as ImageItem[]).map((imageItem) => {
    const imageName = imageItem.imageKey;

    // get the value once

    return (
      // eslint-disable-next-line react/jsx-key
      <div>
        <label className="input-file">
          <input
            type="file"
            id={imageItem.imageKey}
            key={imageItem.id}
            accept="image/png, image/jpeg"
            hidden={imageItem.selectedFile}
            onChange={() => onChangeFile(imageItem.imageKey)}
          />
          {!imageItem.selectedFile && <span>Выберите файл</span>}
        </label>
        {imageItem.selectedFile && (
          <span style={{ justifyContent: 'space-between' }}>
            <label className="text-field__file-name">{imageItem.fileName} </label>
            <input type="button" value="Х" className="button-delete" onClick={() => onClickDeleteFile(imageItem.id)} />
          </span>
        )}
      </div>
    );
  });
  return (
    <>
      <form onSubmit={handleSubmit(addProduct)}>
        <div className="text-field">
          <label className="text-field__label">Категория товара</label>
          <input
            className="text-field__input"
            placeholder="Категория"
            {...register('categorySelect', {
              required: 'Поле обязательно для заполнения',
            })}
          />

          <label className="text-field__error-label">{errors.categorySelect?.message}</label>

          <label className="text-field__label">Наименование товара</label>
          <input
            className="text-field__input"
            type="text"
            placeholder="Наименование товара"
            {...register('productionName', { required: 'Поле обязательно для заполнения' })}
          />

          <label className="text-field__error-label">{errors.productionName?.message}</label>

          <label className="text-field__label">Краткое описание товара</label>
          <input
            className="text-field__input"
            type="text"
            placeholder="Краткое описание товара"
            {...register('shortDefinition', { required: 'Поле обязательно для заполнения' })}
          />

          <label className="text-field__error-label">{errors.shortDefinition?.message}</label>
          <label className="text-field__label">Полное описание товара</label>
          <input
            className="text-field__input"
            type="text"
            placeholder="Полное описание товара"
            {...register('definition', { required: 'Поле обязательно для заполнения' })}
          />

          <label className="text-field__error-label">{errors.definition?.message}</label>

          <label className="text-field__label">Цена</label>
          <input
            className="text-field__input"
            type="number"
            placeholder="Цена"
            step="any"
            {...register('price', {
              required: 'Поле обязательно для заполнения',
              min: {
                message: 'Минимальная цена 1 рэ',
                value: 1,
              },
            })}
          />

          <label className="text-field__error-label">{errors.price?.message}</label>
          <div className="block">
            <hr />
            <label className="text-field__label">Добавьте изображения</label>
            {imageListBlock}
          </div>

          <button type="submit" className="button-add">
            Добавить
          </button>
        </div>
      </form>
    </>
  );
};
