import React from 'react';
import FillBasketButton from '../fillBasketButton/FillBasketButton';
import EmptyBasketButton from '../emptyButtonBasket/EmptyBasketButton';

// eslint-disable-next-line react/prop-types
export default function BasketBlock({ counter = 0 }) {
  if (counter === 0) return <EmptyBasketButton />;
  else return <FillBasketButton counter={counter}></FillBasketButton>;
}
