import React, { FC, useEffect, useState } from 'react';
import s from './ShortDefinitionProductList.module.sass';
import { ShortDefinitionProductBlock } from '../shortDefinitionProductBlock/ShortDefinitionProductBlock';
import { createRandomProduct, generateRandomNumber, Product } from '../../homeworks/ts1/3_write';
import { Production } from '../../reduxToolkit/basketSlice';

export interface ShortDefinitionProductListItem {
  id: number;
  amount: number;
  image: string;
  text: string;
  shortDefinition: string;
}
interface DefinitionProps {
  shortDefinitionProduct?: ShortDefinitionProductListItem[];
}

export const ShortDefinitionProductList: FC<DefinitionProps> = ({ shortDefinitionProduct = [] }) => {
  const [shortDefinitionProductList, setShortDefinitionProductList] = useState(shortDefinitionProduct);
  useEffect(() => {
    const options = {
      // родитель целевого элемента - область просмотра
      // root: null,
      // без отступов
      rootMargin: '0px',
      // процент пересечения - половина изображения
      threshold: 0.25,
    };

    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
      // для каждой записи-целевого элемента
      entries.forEach((entry) => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
          const createdAt = '2023-06-06T12:06:56.957Z';
          const product: Product = createRandomProduct(createdAt);
          const item: ShortDefinitionProductListItem = {
            id: shortDefinitionProductList.length + 1,
            amount: product.price,
            image: product.photo,
            text: product.category.name,
            shortDefinition: product.desc,
          };
          setShortDefinitionProductList(() => [...shortDefinitionProductList, item]);

          observer.unobserve(entry.target);
        }
      });
    }, options);

    // с помощью цикла следим за всеми img на странице
    // const arr = document.getElementsByTagName('ShortDefinitionProductBlock');
    //
    // for (let i = 0; i < arr.length; i++) {
    //   observer.observe(arr.item(i));
    // }
    observer.observe(document.getElementById(shortDefinitionProductList.length.toString()));
  }, [shortDefinitionProductList]);
  const productList = shortDefinitionProductList.map((item) => {
    const product: Production = {
      id: item.id,
      categorySelect: item.text,
      productionName: item.text,
      shortDefinition: item.shortDefinition,
      definition: item.shortDefinition,
      price: item.amount,
      image: item.image,
    };
    return (
      // eslint-disable-next-line react/jsx-key
      <div className={s.definition_product_list__div} key={item.id} id={item.id.toString()}>
        <ShortDefinitionProductBlock product={product} />
      </div>
    );
  });
  return <div className={s.definition_product_list}>{productList}</div>;
};
