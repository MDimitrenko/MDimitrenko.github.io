import React, { FC } from 'react';
import { BasketButton } from '../basketButton/BasketButton';
// eslint-disable-next-line import/no-unresolved
import '../../i18n';
import { useTranslation } from 'react-i18next';
import './LanguageButton.css';

// eslint-disable-next-line react/prop-types
export const LanguageButton: FC = () => {
  const { t, i18n } = useTranslation();
  const lngStyle = (buttonLng: string): string => (buttonLng === i18n.language ? 'in-basket__disabled' : '');
  const ruStyle = 'in-basket__left-button ' + lngStyle('ru');
  const enStyle = 'in-basket__right-button ' + lngStyle('en');
  return (
    <div className='language-button'>
      <BasketButton className={ruStyle} text={t('language.ru')} onClick={() => i18n.changeLanguage('ru')} />
      <BasketButton className={enStyle} text={t('language.en')} onClick={() => i18n.changeLanguage('en')} />
    </div>
  );
};
