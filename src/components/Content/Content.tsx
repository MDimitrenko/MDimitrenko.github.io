import React from "react"
import s from './Content.module.sass';

type ContentProps = {
    children?: React.ReactNode;
};

const Content = ({children}: ContentProps) => {
    return (
        <div className={s.content}>
            {children}
        </div>
    )
}

export default Content