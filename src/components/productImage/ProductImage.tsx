import React, { FC } from 'react';
import './ProductImage.css';

interface ProductImageProps {
  image: string;
  divClassName?: string;
}

export const ProductImage: FC<ProductImageProps> = ({ image, divClassName }) => {
  return (
    <div className={divClassName}>
      <img src={image} className="product-image__img" alt="Product" />
    </div>
  );
};
