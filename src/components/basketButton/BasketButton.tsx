import React, { FC } from 'react';
import './BasketButton.css';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { addProduct, Production } from '../../reduxToolkit/basketSlice';

interface BasketButtonProps {
  text: string;
  className?: string;
  product?: Production;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
// eslint-disable-next-line react/prop-types
export const BasketButton: FC<BasketButtonProps> = ({ text, className = '', product, onClick }) => {
  const dispatch = useDispatch();
  const onClick1 = () => {
    dispatch(addProduct(product));
  };
  return (
    <div className="basket-button__div">
      <button className={cn('in-basket', className)} onClick={!onClick ? onClick1 : onClick}>
        {text}
      </button>
    </div>
  );
};
