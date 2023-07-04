import React, { FC } from 'react';
import './BasketButton.css';

interface BasketButtonProps {
  text: string;
}
// eslint-disable-next-line react/prop-types
export const BasketButton: FC<BasketButtonProps> = ({ text }) => {
  return (
    <div className="basket-button__div">
      <button className="in-basket">{text}</button>
    </div>
  );
};
