import React, { FC, useEffect, useState } from 'react';
import s from './ShortDefinitionProductList.module.sass';
import { ShortDefinitionProductBlock } from '../shortDefinitionProductBlock/ShortDefinitionProductBlock';
import { Production } from '../../reduxToolkit/basketSlice';

export interface ShortDefinitionProductListItem {
  id: string;
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
    // Обновляем внутреннее состояние, когда меняется shortDefinitionProduct
    setShortDefinitionProductList(shortDefinitionProduct);
  }, [shortDefinitionProduct]);

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
      <div className={s.definition_product_list__div} key={item.id} id={item.id.toString()}>
        <ShortDefinitionProductBlock product={product} />
      </div>
    );
  });

  return <div className={s.definition_product_list}>{productList}</div>;
};
