import React from 'react';
import BasketButton from '../basketButton/BasketButton';
import BasketText from '../basketText/BasketText';
import './FillBasketButton.css';
// eslint-disable-next-line react/prop-types
export default function FillBasketButton({ counter }) {
  return (
    <div className="fill-basket-button">
      <BasketButton text="-" />
      <BasketText text={counter} />
      <BasketButton text="+" />
    </div>
  );
}
