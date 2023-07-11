import React, { FC } from 'react';
import { AmountText } from '../amountText/AmountText';
import { ProductImage } from '../productImage/ProductImage';
import './DefinitionProductBlock.css';
import { DescriptionText } from '../descriptionText/DescriptionText';
import { BasketBlock } from '../basketBlock/BasketBlock';

interface DefinitionProps {
  amount: number;
  images: string[];
  nameProduct: string;
  category: string;
  definition: string;
}

export const DefinitionProductBlock: FC<DefinitionProps> = ({ amount, images, nameProduct, category, definition }) => {
  // eslint-disable-next-line react/prop-types
  const imagesList = images.map((img) => (
    // eslint-disable-next-line react/jsx-key
    <div className="definition-product-block__image-div">
      <ProductImage image={img} />
    </div>
  ));
  return (
    <div className="definition-product-block__root-div">
      <ProductImage image={images[0]} />
      <span>{imagesList}</span>
      <AmountText amount={amount} />
      <hr />
      <DescriptionText size="big" bold="true" text={nameProduct} />
      <DescriptionText size="x-small" text={category} />
      <DescriptionText size="big" bold="true" text="О товаре" />

      <DescriptionText size="medium" text={definition} />

      <BasketBlock />
    </div>
  );
};
