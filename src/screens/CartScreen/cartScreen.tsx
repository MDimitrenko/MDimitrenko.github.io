import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartItem/cartItem';

const CartScreen = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Корм для кошек',
      description: 'Влажный корм для кошек, с курицей. 75 г',
      price: 1.99,
      imageSrc: 'https://www.pngkey.com/png/detail/614-6141103_whiskas-pocket-ocean-fish-1-2kg-whiskas-cat.png',
    },
    {
      id: 2,
      name: 'Корм для кошек с курицей',
      description: 'Влажный корм для кошек, с курицей. 75 г',
      price: 2.99,
      imageSrc: 'https://www.pngkey.com/png/detail/614-6141103_whiskas-pocket-ocean-fish-1-2kg-whiskas-cat.png',
    },
  ];

  return (
    <div>
      <Link to="/">Back to Store</Link>

      <h2>Your Cart</h2>

      {}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          imageSrc={item.imageSrc}
          onDelete={() => {}}
        />
      ))}
    </div>
  );
};

export default CartScreen;
