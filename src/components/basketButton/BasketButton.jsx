import React from 'react';
import './BasketButton.css';
// eslint-disable-next-line react/prop-types
export default function BasketButton({ text }) {
  return (
    <div className="basket-button__div">
      <button className="in-basket">{text}</button>
    </div>
  );
}
