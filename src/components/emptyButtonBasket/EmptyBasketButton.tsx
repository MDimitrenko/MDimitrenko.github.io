import React, { FC } from 'react';
import { BasketButton } from '../basketButton/BasketButton';
import { useTranslation } from 'react-i18next';
import './EmptyBasketButton.css';
import { Production } from '../../reduxToolkit/basketSlice';
// eslint-disable-next-line react/prop-types
interface EmptyBasketButtonProps {
  product: Production;
}
export const EmptyBasketButton: FC<EmptyBasketButtonProps> = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className="basket-block__div">
      <BasketButton text={t('components.inBasket')} product={product} />
    </div>
  );
};
