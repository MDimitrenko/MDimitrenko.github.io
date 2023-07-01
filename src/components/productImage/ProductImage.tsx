import React, { FC } from 'react';
import './ProductImage.css';
// eslint-disable-next-line react/prop-types
interface ProductImageProps {
  image: string;
}
export const ProductImage: FC<ProductImageProps> = ({ image }) => {
  return (
    <>
      <img src={require(`../../images/${image}`)} className="product-image__img" />
    </>
  );
};
