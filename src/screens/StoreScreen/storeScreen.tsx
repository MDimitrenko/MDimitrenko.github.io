import React, { FC } from 'react';
import { BasketButton } from '../../components/basketButton/BasketButton';
import { Link } from 'react-router-dom';
import { Page } from 'src/components/Page';
import s from './storeScreen.sass';
import { useTranslation } from 'react-i18next';
import {
  ShortDefinitionProductList,
  ShortDefinitionProductListItem,
} from '../../components/shortDefinitionProductList/ShortDefinitionProductList';
export const StoreScreen: FC = () => {
  const { t } = useTranslation();
  const shortDefinitionProductList: ShortDefinitionProductListItem[] = [
    {
      id: 1,
      amount: 555,
      image: 'wiskas1.jpg',
      text: 'Корм для кошек',
      shortDefinition: 'Влажный корм для кошек, с курицей. 75 г',
    },
    {
      id: 2,
      amount: 555,
      image: 'wiskas.jpg',
      text: 'Корм для кошек с курицей',
      shortDefinition: 'Влажный корм для кошек, с курицей. 75 г',
    },
  ];

  return (
    <Page title={t`StoreScreenTitle`} className={s.root}>
      <div>
        <ShortDefinitionProductList shortDefinitionProduct={shortDefinitionProductList} />
      </div>
    </Page>
  );
};

export default StoreScreen;
