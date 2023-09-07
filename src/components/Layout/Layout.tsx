import React from 'react';
import s from './Layout.module.sass';
import Header from '../Header/Header';
import { useTranslation } from 'react-i18next';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
