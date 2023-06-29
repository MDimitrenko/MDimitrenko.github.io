import React from 'react';
import BasketButton from '../basketButton/BasketButton';
// eslint-disable-next-line react/prop-types
export default function EmptyBasketButton() {
  return (
    <div className="basket-block__div">
      <BasketButton name="В корзину" />
    </div>
  );
}
