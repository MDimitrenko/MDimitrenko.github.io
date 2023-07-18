import React, { FC } from 'react';
import { BasketButton } from '../basketButton/BasketButton';
import { BasketText } from '../basketText/BasketText';
import './FillBasketButton.css';
// eslint-disable-next-line react/prop-types
interface FillBasketButtonProps {
  counter: number;
}
export const FillBasketButton: FC<FillBasketButtonProps> = ({ counter }) => {
  return (
    <div className="fill-basket-button">
      <BasketButton text="-" />
      <BasketText text={counter.toString()} />
      <BasketButton text="+" />
    </div>
  );
};
