import React from "react"
import s from './Layout.module.sass';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

type LayoutProps = {
    children?: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <div className={s.layout}>
            <Header>
                {children}
            </Header>
            <Navigation />
        </div>
    )
}

export default Layout