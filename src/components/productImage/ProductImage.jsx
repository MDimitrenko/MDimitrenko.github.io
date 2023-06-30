import React from 'react';
import './ProductImage.css';
// eslint-disable-next-line react/prop-types
export default function ProductImage({ image }) {
  return (
    <>
      <img src={require(`../../images/${image}`)} className="product-image__img" />
    </>
  );
}
