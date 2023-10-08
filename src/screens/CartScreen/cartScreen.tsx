import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartItem/cartItem';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Production, addProduct } from '../../reduxToolkit/basketSlice';
import { RootState } from '../../reduxToolkit/store';

const CartScreen: React.FC = () => {
  const { t } = useTranslation();
  const products = useSelector<RootState, Production[]>((state) => state.basketSlice.products.flat());
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    axios
      .get('https://19429ba06ff2.vps.myjino.ru/api/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const responseData = response.data.data;
        const transformedData = transformServerData(responseData);
        console.log(responseData);
        console.log(transformedData);
        const currentProducts = products;
        transformedData.forEach((newProduct: { orderId: string }) => {
          const existingProduct = currentProducts.find((product) => product.orderId === newProduct.orderId);
          if (!existingProduct) {
            dispatch(addProduct(newProduct));
          }
        });
      })
      .catch((error: any) => {
        console.error('Getting cart items error', error);
      });
  }, [dispatch, token]);

  const transformServerData = (serverData: any) => {
    const products = serverData.flatMap((order: any) => {
      return order.products.map((product: any) => ({
        id: product.product.id,
        orderId: order.id,
        categorySelect: product.product.category.name,
        productionName: product.product.name,
        shortDefinition: product.product.desc,
        definition: product.product.desc,
        price: product.product.price,
        image: product.product.photo,
      }));
    });
    return products;
  };

  console.log('Products from Redux:', products);

  return (
    <div>
      <Link to="/store">{t('BackToStoreTitle')}</Link>

      <h2>Your Cart</h2>

      {products.map((item: any) => (
        <CartItem
          key={item.id}
          orderid={item.orderId}
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
