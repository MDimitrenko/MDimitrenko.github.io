import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsBlock } from './SettingsBlock';
import { Page } from '../../components/Page';
import s from './AddProduct.module.sass';

export const AddProduct: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`titleAddProduct`}>
      <SettingsBlock className={s.block} />
    </Page>
  );
};

export default AddProduct;