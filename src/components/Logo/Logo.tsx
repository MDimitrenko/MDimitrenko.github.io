import React from 'react';
import './Logo.css';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';

const Logo = () => {
  const { t, i18n } = useTranslation();
  return <div className={cn('logo', i18n.language)}></div>;
};

export default Logo;
