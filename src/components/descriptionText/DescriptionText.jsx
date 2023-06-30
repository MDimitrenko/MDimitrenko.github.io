import React from 'react';
import './DescriptionText.css';
// eslint-disable-next-line react/prop-types
export default function BasketText({ text, size = '', bold = false }) {
  const className =
    'description-text ' +
    (size ? 'description-text__text___' + size : '') +
    (bold ? ' description-text__text___bold' : '');

  return (
    <div>
      <label className={className}>{text}</label>
    </div>
  );
}
