import React, { FC } from 'react';
import { BasketButton } from '../basketButton/BasketButton';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line react/prop-types
export const EmptyBasketButton: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="basket-block__div">
      <BasketButton text={t('components.inBasket')} />
    </div>
  );
};
