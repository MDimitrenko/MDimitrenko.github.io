import React, { FC } from 'react';
import { FillBasketButton } from '../fillBasketButton/FillBasketButton';
import { EmptyBasketButton } from '../emptyButtonBasket/EmptyBasketButton';
import { Production } from '../../reduxToolkit/basketSlice';

interface BasketBlockProps {
  counter?: number;
  product: Production;
}
// eslint-disable-next-line react/prop-types
export const BasketBlock: FC<BasketBlockProps> = ({ counter = 0, product }) => {
  if (counter === 0) return <EmptyBasketButton product={product} />;
  else return <FillBasketButton counter={counter}></FillBasketButton>;
};
