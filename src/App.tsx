import React from 'react';
import Layout from './components/Layout/Layout';
import { useTranslation } from 'react-i18next';
import ModalButton from './components/modalButton/modalButton';
import { ThemeProvider } from './theming';
import { Navigation } from './navigation';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <ThemeProvider>
        <Layout></Layout>
        <ModalButton />
        <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
