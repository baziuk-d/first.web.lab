import React, { useRef, useEffect, useCallback } from 'react';
import logo from './images/logo.svg';
import './Header.css';

const Header = () => {
    const containerRef = useRef(null);
    const hamburgerRef = useRef(null);
    const navRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const headerDivRef = useRef(null);
    const clickedRef = useRef(false);

    const burgerExpand = () => {
        const container = containerRef.current;
        if (container) {
            if (container.children.length === 0) {
                hamburgerToCross();
                clickedRef.current = true;
            } else {
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                crossToHamburger();
                clickedRef.current = false;
            }
        }
    };

    const hamburgerToCross = () => {
        const container = containerRef.current;
        const nav = navRef.current;
        const line1 = line1Ref.current;
        const line2 = line2Ref.current;
        const line3 = line3Ref.current;
        const hamburger = hamburgerRef.current;

        if (container && nav && line1 && line2 && line3 && hamburger) {
            nav.style.display = "flex";
            container.appendChild(nav);
            container.style.display = "block";
            nav.style.flexDirection = "column";
            nav.style.alignItems = "end";
            container.style.padding = "0 15%";
            line2.style.width = "0";
            line1.style.transform = "rotate(45deg)";
            line3.style.transform = "rotate(-45deg)";
            line1.style.position = "absolute";
            line3.style.position = "absolute";
            line1.style.top = "24px";
            line3.style.bottom = "24px";
            hamburger.style.position = "relative";
        }
    };

    const crossToHamburger = () => {
        const line1 = line1Ref.current;
        const line2 = line2Ref.current;
        const line3 = line3Ref.current;

        if (line1 && line2 && line3) {
            line3.style.position = "static";
            line1.style.position = "static";
            line2.style.transition = "0.5s";
            line1.style.transform = "rotate(0)";
            line3.style.transform = "rotate(0)";
            line2.style.width = "30px";
        }
    };

    const checkScreenWidth = useCallback(() => {
        const header = headerDivRef.current;
        const nav = navRef.current;
        const width = window.innerWidth;
    
        if (header && nav) {
            if (width > 1100) {
                header.appendChild(nav);
                nav.style.display = "flex";
                nav.style.flexDirection = "row";
                nav.style.alignItems = "center";
                clickedRef.current = false;
                crossToHamburger();
            } else if (width <= 1100 && !clickedRef.current) {
                nav.style.display = "none";
            }
        }
    }, []);
    
    useEffect(() => {
        window.addEventListener("resize", checkScreenWidth);
        checkScreenWidth();
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, [checkScreenWidth]);

    return (
        <header>
            <div id="header" ref={headerDivRef}>
                <img src={logo} alt="logo" />
                <nav ref={navRef}>
                    <ul>
                        <li><a href="/some-path">Home</a></li>
                        <li><a href="/some-path">Destinations</a></li>
                        <li><a href="/some-path">About</a></li>
                        <li><a href="/some-path">Partner</a></li>
                    </ul>
                    <div className="signButtons">
                        <button className="login">Login</button>
                        <button className="register">Register</button>
                    </div>
                </nav>
                <div className="hamburger" ref={hamburgerRef} onClick={burgerExpand}>
                    <div id="line1" ref={line1Ref}></div>
                    <div id="line2" ref={line2Ref}></div>
                    <div id="line3" ref={line3Ref}></div>
                </div>
            </div>
            <div id="container" ref={containerRef}></div>
        </header>
    );
};

export default Header;