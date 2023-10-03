import React, { FC } from 'react';
import { AmountText } from '../amountText/AmountText';
import { ProductImage } from '../productImage/ProductImage';
import './DefinitionProductBlock.css';
import { DescriptionText } from '../descriptionText/DescriptionText';
import { BasketBlock } from '../basketBlock/BasketBlock';
import { useTranslation } from 'react-i18next';
import { Production } from '../../reduxToolkit/basketSlice';

interface DefinitionProps {
  id: number;
  amount: number;
  images: string[];
  nameProduct: string;
  category: string;
  definition: string;
}

export const DefinitionProductBlock: FC<DefinitionProps> = ({
  id,
  amount,
  images,
  nameProduct,
  category,
  definition,
}) => {
  // eslint-disable-next-line react/prop-types
  const { t } = useTranslation();
  const imagesList = images.map((img) => (
    // eslint-disable-next-line react/jsx-key
    <div className="definition_product_block__image_div">
      <ProductImage image={img} />
    </div>
  ));
  const production: Production = {
    id: id,
    categorySelect: category,
    productionName: nameProduct,
    shortDefinition: definition,
    definition: definition,
    price: amount,
    image: images[0],
  };
  return (
    <div className="definition_product_block__root_div">
      <ProductImage image={images[0]} />
      <span>{imagesList}</span>
      <AmountText amount={amount} />
      <hr />
      <DescriptionText size="big" bold="true" text={nameProduct} />
      <DescriptionText size="x-small" text={category} />
      <DescriptionText size="big" bold="true" text={t('aboutTheProduct')} />

      <DescriptionText size="medium" text={definition} />

      <BasketBlock product={production} />
    </div>
  );
};
