import React, { useState } from "react";
import { Link } from "react-router-dom";
// import gsap from "gsap";
// import avatar from "../assets/test.jpg";

export const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    const [classes, setClasses] = useState({ btn: "", menu: "" });

    const toggleMenu = () => {
        setOpen(true);
        !isOpen ? setClasses({ btn: "open", menu: "" }) : setClasses({ btn: "", menu: "close" });
        setTimeout(() => {
            setOpen(!isOpen);
        }, 500);
    };
    return (
        <>
            {isOpen ? <NavigationPanel toggle={toggleMenu} menuClass={classes.menu} /> : null}
            <header>
                <div className="logo">
                    <h3>karunkop</h3>
                </div>
                <div className="links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/karun_kop/">
                        <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/karunkop">
                        <i className="fab fa-github" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_shrestha7">
                        <i className="fab fa-twitter" />
                    </a>
                </div>

                <div className="navigation-button" onClick={toggleMenu}>
                    <div className={`menu ${classes.btn}`}></div>
                </div>
            </header>
        </>
    );
};

export const NavigationPanel = ({ menuClass, toggle }) => {
    // useEffect(() => {
    //     const t1 = gsap.timeline();
    //     t1.from(".navigation-panel", { duration: 0.9, yPercent: -100, opacity: 0 }).from("#links", { x: 100, opacity: 0, stagger: 0.2, duration: 0.1 });
    // }, []);

    return (
        <div className={`navigation-panel ${menuClass}`}>
            <div className="social-links">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/karun_kop/">
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
                <Link to="/">
                    <span onClick={toggle}>
                        <li id="links">HOME</li>
                    </span>
                </Link>
                <Link to="/about">
                    <span onClick={toggle}>
                        <li id="links">ABOUT ME</li>
                    </span>
                </Link>
                <Link to="/works">
                    <span onClick={toggle}>
                        <li id="links">WORKS</li>
                    </span>
                </Link>
                <Link to="#contact">
                    <span onClick={toggle}>
                        <li id="links">CONTACT</li>
                    </span>
                </Link>
            </ul>
        </div>
    );
};
