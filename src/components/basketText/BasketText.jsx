import React from 'react';
import './BasketText.css';
// eslint-disable-next-line react/prop-types
export default function BasketText({ text }) {
  return (
    <div className="basket-button__div">
      <label className="basket-text">{text}</label>
    </div>
  );
}
