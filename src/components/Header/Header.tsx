import React, { useRef, useLayoutEffect } from "react";
import './Header.css';
import Logo from '../Logo/Logo';

type HeaderProps = {
    children?: React.ReactNode;
};

const Header = ({children}: HeaderProps) => {
    const stickyHeader = useRef(null);

    useLayoutEffect(() => {
        const header = document.getElementById("header");
        let fixedTop = stickyHeader.current.offsetTop;
        const stickyHeaderEvent = () => {
            if (window.scrollY > fixedTop) {
                header.classList.add("sticky-header");
            } else {
                header.classList.remove("sticky-header");
            }
        };
        window.addEventListener("scroll", stickyHeaderEvent);
    }, []);

    return (
        <div className='header' id='header' ref={stickyHeader}>
            <Logo/>
            {children}
        </div>
    )
}

export default Header