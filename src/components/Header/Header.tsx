import React, { useRef, useLayoutEffect } from 'react';
import s from './Header.sass';
import Logo from '../Logo/Logo';
import { LanguageButton } from '../languageButton/LanguageButton';
import { ThemeSwitcher } from '../ThemeSwitcher';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const stickyHeader = useRef(null);

  useLayoutEffect(() => {
    const header = document.getElementById('header');
    const fixedTop = stickyHeader.current.offsetTop;
    const stickyHeaderEvent = () => {
      if (window.scrollY > fixedTop) {
        header.classList.add(s.sticky_header);
      } else {
        header.classList.remove(s.sticky_header);
      }
    };
    window.addEventListener('scroll', stickyHeaderEvent);
  }, []);

  return (
    <div className={s.header} id="header" ref={stickyHeader}>
      <Logo />
      <ThemeSwitcher />
      <LanguageButton />
      {children}
    </div>
  );
};

export default Header;
