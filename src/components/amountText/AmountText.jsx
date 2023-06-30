import React from 'react';
import './AmountText.css';
// eslint-disable-next-line react/prop-types
export default function AmountText({ amount }) {
  return (
    <div className="amount-text__div">
      <label className="amount-text">{amount} &#x20bd;</label>
    </div>
  );
}
