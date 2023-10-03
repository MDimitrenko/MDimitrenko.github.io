import React, { FC } from 'react';
import { AmountText } from '../amountText/AmountText';
import { ProductImage } from '../productImage/ProductImage';
import './ShortDefinitionProductBlock.css';
import '../productImage/ProductImage.css';
import { DescriptionText } from '../descriptionText/DescriptionText';
import { BasketBlock } from '../basketBlock/BasketBlock';
import { Production } from '../../reduxToolkit/basketSlice';

export interface ShortDefinitionProductBlockProps {
  product: Production;
}

export const ShortDefinitionProductBlock: FC<ShortDefinitionProductBlockProps> = ({ product }) => {
  return (
    <div className="short-definition-product-block__root-div">
      <ProductImage divClassName="product-image__div" image={product.image} />
      <AmountText amount={product.price} />
      <hr />
      <DescriptionText size="big" bold="true" text={product.categorySelect} />
      <DescriptionText size="medium" text={product.shortDefinition} />
      <div className="basket-button-block">
        <BasketBlock product={product} />
      </div>
    </div>
  );
};
