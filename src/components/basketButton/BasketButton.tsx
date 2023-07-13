import React, { FC } from 'react';
import './BasketButton.css';
import cn from 'clsx';

interface BasketButtonProps {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
// eslint-disable-next-line react/prop-types
export const BasketButton: FC<BasketButtonProps> = ({ text, className = '', onClick }) => {
  return (
    <div className="basket-button__div">
      <button className={cn('in-basket', className)} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
