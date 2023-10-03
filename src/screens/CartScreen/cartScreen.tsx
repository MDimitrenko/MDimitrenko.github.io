import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartItem/cartItem';
import { useTranslation } from 'react-i18next';
import { Production } from '../../reduxToolkit/basketSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolkit/store';

const CartScreen = () => {
  const { t } = useTranslation();
  const products = useSelector<RootState, Production[]>((state) => state.basketSlice.products);

  return (
    <div>
      <Link to="/store">{t('BackToStoreTitle')}</Link>

      <h2>Your Cart</h2>

      {products
        .filter((item) => item !== undefined)
        .map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            productionName={item.productionName}
            shortDefinition={item.shortDefinition}
            price={item.price}
            image={item.image}
          />
        ))}
    </div>
  );
};

export default CartScreen;
