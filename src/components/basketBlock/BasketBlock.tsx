import React, { FC } from 'react';
import { FillBasketButton } from '../fillBasketButton/FillBasketButton';
import { EmptyBasketButton } from '../emptyButtonBasket/EmptyBasketButton';

interface BasketBlockProps {
  counter?: number;
}
// eslint-disable-next-line react/prop-types
export const BasketBlock: FC<BasketBlockProps> = ({ counter = 0 }) => {
  if (counter === 0) return <EmptyBasketButton />;
  else return <FillBasketButton counter={counter}></FillBasketButton>;
};
