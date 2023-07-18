import React from 'react';
import Layout from './components/Layout/Layout';
import { DefinitionProductBlock } from './components/definitionProductBlock/DefinitionProductBlock';
import { useTranslation } from 'react-i18next';
import ModalButton from './components/modalButton/modalButton';
import { ThemeProvider } from './theming';
import Content from './components/Content/Content';
import {
  ShortDefinitionProductList,
  ShortDefinitionProductListItem,
} from './components/shortDefinitionProductList/ShortDefinitionProductList';

function App() {
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
    <div className="App">
      <ThemeProvider>
        <Layout />
        <Content>
          <ModalButton />
          <ShortDefinitionProductList shortDefinitionProduct={shortDefinitionProductList} />
        </Content>
      </ThemeProvider>
    </div>
  );
}

export default App;
