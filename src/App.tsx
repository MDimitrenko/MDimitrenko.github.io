import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <Layout>
            <ModalButton />
            <Navigation />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
