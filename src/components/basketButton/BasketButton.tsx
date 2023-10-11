import React, { FC } from 'react';
import './BasketButton.css';
import cn from 'clsx';
import axios from 'axios';
import { Production } from 'src/reduxToolkit/basketSlice';

interface BasketButtonProps {
  text: string;
  className?: string;
  product?: Production;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const BasketButton: FC<BasketButtonProps> = ({ text, className = '', product, onClick }) => {
  const token = localStorage.getItem('accessToken');
  const sendPostRequest = async () => {
    try {
      const response = await axios.post(
        'https://19429ba06ff2.vps.myjino.ru/api/orders',
        {
          products: [{ id: product?.id, quantity: 1 }],
          status: 'pending_confirmation',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('POST answer:', response.data);
    } catch (error) {
      console.error('Response error:', error);
    }
  };

  return (
    <div className="basket-button__div">
      <button className={cn('in-basket', className)} onClick={onClick || sendPostRequest}>
        {text}
      </button>
    </div>
  );
};
