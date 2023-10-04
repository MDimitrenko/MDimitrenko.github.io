import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartItem/cartItem';
import { useTranslation } from 'react-i18next';
import { Production } from '../../reduxToolkit/basketSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolkit/store';
import axios from 'axios';

interface ServerCartItem {
  id: string;
  products: {
    _id: string;
    product: {
      id: string;
      name: string;
      photo: string;
      desc: string;
      createdAt: string;
      oldPrice: number;
      price: number;
      updatedAt: string;
      category: {
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    quantity: number;
  }[];
  status: string;
  user: {
    id: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface ServerProduct {
  id: string;
  name: string;
  photo: string;
  desc: string;
  createdAt: string;
  oldPrice: number;
  price: number;
  updatedAt: string;
  category: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

const transformServerData = (serverData: ServerCartItem[]): Production[] => {
  return serverData.flatMap((order) => {
    return order.products.map((product) => ({
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
};

const CartScreen = () => {
  const { t } = useTranslation();
  const products = useSelector<RootState, Production[]>((state) => state.basketSlice.products);

  const [cartData, setCartData] = useState<Production[]>([]);
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    axios
      .get('https://19429ba06ff2.vps.myjino.ru/api/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Обрабатываем ответ и устанавливаем данные в состояние
        const responseData = response.data.data;
        const transformedData = transformServerData(responseData);
        console.log(responseData);
        console.log(transformedData);
        setCartData(transformedData);
      })
      .catch((error) => {
        console.error('Getting cart items error', error);
      });
  }, []);

  return (
    <div>
      <Link to="/store">{t('BackToStoreTitle')}</Link>

      <h2>Your Cart</h2>

      {cartData.map((item) => (
        <CartItem
          key={item.id}
          orderid={item.orderId}
          id={item.id}
          productionName={item.productionName}
          shortDefinition={item.shortDefinition}
          price={item.price}
          image={item.image}
          setCartData={setCartData}
        />
      ))}
    </div>
  );
};

export default CartScreen;
