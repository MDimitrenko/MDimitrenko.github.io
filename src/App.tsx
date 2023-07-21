import React from 'react';
import Layout from './components/Layout/Layout';
import { DefinitionProductBlock } from './components/schortDefinitionProduct/DefinitionProductBlock';
import { useTranslation } from 'react-i18next';
import ModalButton from 'src/components/modalButton/modalButton';
import { ThemeProvider } from './theming';
import Content from './components/Content/Content';
import AuthorizationForm from './components/authorizationForm/authorizationForm';
import ProfileScreen from './screens/ProfileScreen'
import { AddProduct } from './screens/AddProduct';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <ThemeProvider>
         <Layout />
         <Content>
         <AddProduct />
         <ProfileScreen />
         <AuthorizationForm />
          <DefinitionProductBlock
              nameProduct={t('products.WiskasChicken75.nameProduct')}
              definition={t('products.WiskasChicken75.definition')}
              category={t('products.WiskasChicken75.category')}
              images={['wiskas.jpg', 'wiskas1.jpg', 'wiskas2.jpg']}
              amount={85}
          />
          <ModalButton />
        </Content>
      </ThemeProvider>
    </div>
  );
}

export default App;
