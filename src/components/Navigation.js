import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export const Navigation = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [buttonClass, setButtonClass] = useState("");

    const [navClass, setNavClass] = useState("");

    const toggleMenuButton = () => {
        setMenuOpen(true);
        if (!isMenuOpen) {
            setButtonClass("open");
            setNavClass("");
        } else {
            setButtonClass("");
            setNavClass("close");
        }
        setTimeout(() => {
            setMenuOpen(!isMenuOpen);
        }, 400);
    };

    return (
        <>
            {isMenuOpen ? <NavigationPanel toggle={toggleMenuButton} menuClass={navClass} /> : null}
            <nav id="nav">
                <div className="logo">
                    <h3>karunkop</h3>
                </div>
                <div className="links">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/karun_kop/"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/karunkop">
                        <i className="fab fa-github" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/_shrestha7"
                    >
                        <i className="fab fa-twitter" />
                    </a>
                </div>

                <div className="menu-section">
                    <div className="navigation-button" onClick={toggleMenuButton}>
                        <div className={`menu ${buttonClass}`}></div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export const NavigationPanel = ({ menuClass, toggle }) => {
    return (
        <div className={`navigation-panel ${menuClass}`}>
            <div className="social-links">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/karun_kop/"
                >
                    <i className="fab fa-instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/karunkop">
                    <i className="fab fa-github" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_shrestha7">
                    <i className="fab fa-twitter" />
                </a>
            </div>
            <ul>
                <Link smooth to="#home">
                    <span onClick={toggle}>
                        <li>Home</li>
                    </span>
                </Link>
                <Link smooth to="#about">
                    <span onClick={toggle}>
                        <li>About Me</li>
                    </span>
                </Link>
                <Link smooth to="#works">
                    <span onClick={toggle}>
                        <li>Works</li>
                    </span>
                </Link>
                <Link smooth to="#contact">
                    <span onClick={toggle}>
                        <li>Contact</li>
                    </span>
                </Link>
            </ul>
        </div>
    );
};
