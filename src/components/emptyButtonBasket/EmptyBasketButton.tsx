import React, { FC } from 'react';
import { BasketButton } from '../basketButton/BasketButton';
// eslint-disable-next-line react/prop-types
export const EmptyBasketButton: FC = () => {
  return (
    <div className="basket-block__div">
      <BasketButton text="В корзину" />
    </div>
  );
};
