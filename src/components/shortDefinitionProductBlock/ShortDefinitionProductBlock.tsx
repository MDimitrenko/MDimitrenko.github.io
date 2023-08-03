import React, { FC } from 'react';
import { AmountText } from '../amountText/AmountText';
import { ProductImage } from '../productImage/ProductImage';
import './ShortDefinitionProductBlock.css';
import '../productImage/ProductImage.css';
import { DescriptionText } from '../descriptionText/DescriptionText';
import { BasketBlock } from '../basketBlock/BasketBlock';

export interface ShortDefinitionProductBlockProps {
  amount: number;
  image: string;
  text: string;
  shortDefinition: string;
}

export const ShortDefinitionProductBlock: FC<ShortDefinitionProductBlockProps> = ({
  amount,
  image,
  text,
  shortDefinition,
}) => {
  return (
    <div className="short-definition-product-block__root-div">
      <ProductImage divClassName="product-image__div" image={image} />
      <AmountText amount={amount} />
      <hr />
      <DescriptionText size="big" bold="true" text={text} />
      <DescriptionText size="medium" text={shortDefinition} />
      <BasketBlock />
    </div>
  );
};
