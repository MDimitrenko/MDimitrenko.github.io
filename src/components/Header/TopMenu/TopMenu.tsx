import React from 'react';
import s from './TopMenu.module.sass';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';

type TopMenuProps = {
  children?: React.ReactNode;
};

export const getClassName: NavLinkProps['className'] = ({ isActive }) => cn(s.link, isActive && s.active);

const TopMenu = ({ children }: TopMenuProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.menu}>
      {children}
      <NavLink className={getClassName} to="/">
        {t`HomeScreenTitle`}
      </NavLink>
      <NavLink className={getClassName} to="/profile">
        {t`ProfileScreenTitle`}
      </NavLink>
      <NavLink className={getClassName} to="/store">
        {t`StoreScreenTitle`}
      </NavLink>
    </div>
  );
};

export default TopMenu;
