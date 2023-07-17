import React from "react"
import s from './Layout.sass';
import Header from '../Header/Header';
import {useTranslation} from "react-i18next";

type LayoutProps = {
    children?: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={s.layout}>
                <Header>
                    {children}
                </Header>
                <div className={s.content}>
                    <p>
                        {t('description')}
                    </p>
                </div>

            </div>
         </>
    )
}

export default Layout