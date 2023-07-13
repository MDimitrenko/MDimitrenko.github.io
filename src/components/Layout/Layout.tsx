import React from "react"
import './Layout.css';
import Header from '../Header/Header';
import {useTranslation} from "react-i18next";

type LayoutProps = {
    children?: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    const { t } = useTranslation();
    return (
        <>
            <div className='layout'>
                <Header>
                    {children}
                </Header>
            </div>
            <p>
                {t('description')}
            </p>
         </>
    )
}

export default Layout