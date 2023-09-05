import React from 'react';
import { BasketButton } from '../components/basketButton/BasketButton';
import { Link } from 'react-router-dom';
import {
  ShortDefinitionProductList,
  ShortDefinitionProductListItem,
} from '../components/shortDefinitionProductList/ShortDefinitionProductList';
const StoreScreen = () => {
  const shortDefinitionProductList: ShortDefinitionProductListItem[] = [
    {
      id: 1,
      amount: 555,
      image: 'wiskas1.jpg',
      text: 'Корм для кошек',
      shortDefinition: 'Влажный корм для кошек, с курицей. 75 г',
    },
    {
      id: 2,
      amount: 555,
      image: 'wiskas.jpg',
      text: 'Корм для кошек с курицей',
      shortDefinition: 'Влажный корм для кошек, с курицей. 75 г',
    },
  ];

  return (
    <div>
      <Link to="/cart">
        <BasketButton text={'Cart'} />
      </Link>

      <ShortDefinitionProductList shortDefinitionProduct={shortDefinitionProductList} />
    </div>
  );
};

export default StoreScreen;
