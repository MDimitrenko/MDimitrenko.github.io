import React from 'react';
import AmountText from '../amountText/AmountText';
import ProductImage from '../productImage/ProductImage';
import './ShortDefinitionProductBlock.css';
import DescriptionText from '../descriptionText/DescriptionText';
import BasketBlock from '../basketBlock/BasketBlock';
export default function ShortDefinitionProductBlock({ amount, image, name, shortDefinition }) {
  return (
    <div className="short-definition-product-block__root-div">
      <ProductImage image={image} />
      <AmountText amount={amount} />
      <hr/>
      <DescriptionText size="big" bold="true" name={name} />
      <DescriptionText size="medium" name={shortDefinition} />
      <BasketBlock />
    </div>
  );
}
