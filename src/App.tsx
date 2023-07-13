import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { DefinitionProductBlock } from './components/schortDefinitionProduct/DefinitionProductBlock';
import { useTranslation } from 'react-i18next';
import Modal from 'src/components/modal/modal';
import ModalButton from 'src/components/modalButton/modalButton';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Layout />
      <DefinitionProductBlock
        nameProduct={t('products.WiskasChicken75.nameProduct')}
        definition={t('products.WiskasChicken75.definition')}
        category={t('products.WiskasChicken75.category')}
        images={['wiskas.jpg', 'wiskas1.jpg', 'wiskas2.jpg']}
        amount={85}
      />
      <ModalButton />
    </div>
  );
}

export default App;
