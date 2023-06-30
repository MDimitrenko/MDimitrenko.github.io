import React from 'react';
import AmountText from '../amountText/AmountText';
import ProductImage from '../productImage/ProductImage';
import './DefinitionProductBlock.css';
import DescriptionText from '../descriptionText/DescriptionText';
import BasketBlock from '../basketBlock/BasketBlock';
// eslint-disable-next-line react/prop-types
export default function DefinitionProductBlock({ amount, images = [], name, category, definition }) {
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
      <DescriptionText size="big" bold="true" text={name} />
      <DescriptionText size="x-small" text={category} />
      <DescriptionText size="big" bold="true" text="О товаре" />

      <DescriptionText size="medium" text={definition} />

      <BasketBlock />
    </div>
  );
}
