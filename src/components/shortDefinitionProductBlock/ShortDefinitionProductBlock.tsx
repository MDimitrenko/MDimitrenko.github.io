import React, { FC } from 'react';
import { AmountText } from '../amountText/AmountText';
import { ProductImage } from '../productImage/ProductImage';
import './ShortDefinitionProductBlock.css';
import '../productImage/ProductImage.css';
import { DescriptionText } from '../descriptionText/DescriptionText';
import { BasketBlock } from '../basketBlock/BasketBlock';
import { Production } from '../../reduxToolkit/basketSlice';
import { BasicButton } from 'src/components/basicButton/BasicButton';
import { useDispatch } from 'react-redux';
import { setEditProduct } from 'src/reduxToolkit/productSlice';
import { getClassName } from 'src/components/Header/TopMenu/TopMenu';
import { NavLink } from 'react-router-dom';

export interface ShortDefinitionProductBlockProps {
  product: Production;
}

export const ShortDefinitionProductBlock: FC<ShortDefinitionProductBlockProps> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="short-definition-product-block__root-div">
      <ProductImage divClassName="product-image__div" image={product.image} />
      <AmountText amount={product.price} />
      <hr />
      <DescriptionText size="big" bold="true" text={product.categorySelect} />
      <DescriptionText size="medium" text={product.shortDefinition} />
      <div className="basket-button-block">
        <BasketBlock product={product} />
        <NavLink className={getClassName} to="/addProduct">
          <BasicButton text="Редактировать" onClick={() => dispatch(setEditProduct(product.id))} />
        </NavLink>
      </div>
    </div>
  );
};
