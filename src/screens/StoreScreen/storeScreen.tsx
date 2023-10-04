import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Page } from 'src/components/Page';
import s from './storeScreen.sass';
import {
  ShortDefinitionProductList,
  ShortDefinitionProductListItem,
} from '../../components/shortDefinitionProductList/ShortDefinitionProductList';

export const StoreScreen: FC = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<ShortDefinitionProductListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get('https://19429ba06ff2.vps.myjino.ru/api/products', { headers })
      .then((response) => {
        const transformedData = transformServerData(response.data);
        setProducts(transformedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Getting data error:', error);
        setError('Data loading error');
        setLoading(false);
      });
  }, []);

  const transformServerData = (serverData: { data: any[] }) => {
    return serverData.data.map((item: { id: string; photo: string; name: string; desc: string; price: number }) => ({
      id: item.id,
      amount: item.price,
      image: item.photo,
      text: item.name,
      shortDefinition: item.desc,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Page title={t`StoreScreenTitle`} className={s.root}>
      <div>
        <ShortDefinitionProductList shortDefinitionProduct={products} />
      </div>
    </Page>
  );
};

export default StoreScreen;
