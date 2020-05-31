import React, { useEffect, useState } from "react";
import "./style.scss";
import { Navigation } from "./components/Navigation";
import gsap from "gsap";
import { Overlay } from "./components/Overlay";
// import { Switch, Route } from "react-router-dom";
import { Home, About } from "./pages/Home";
import Indicator from "./components/indicator";
import { Switch, Route, withRouter } from "react-router-dom";

function App(props) {
    const [key, setKey] = useState("");
    const [index, setIndex] = useState(0);

    const handleKeyPress = e => {
        if (e.code === "ArrowDown" || e.code === "ArrowUp") {
            setKey(e.code);
            if (e.code === "ArrowDown") {
                if (index === 3) {
                    setIndex(3);
                    return;
                }
                setIndex(index + 1);
                return;
            } else {
                if (index === 0) {
                    setIndex(0);
                    return;
                }
                setIndex(index - 1);
                return;
            }
        } else {
            return;
        }
    };

    const renderComponent = () => {
        if (index === 0) return <Home name="KARUN" />;
        if (index === 1) return <About name="ABOUT" />;
        // if (index === 2) return <Home name="PANDEY" />;
        // if (index === 3) return <Home name="NEHA" />;
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        const t1 = gsap.timeline();
        if (index === 1) {
            t1.from(".intro", { delay: 0.9, opacity: 0, x: -75 }).from(".info", { duration: 0.5, opacity: 0, x: -50 }, "-=0.7").from("img", { duration: 0.5, opacity: 0, x: 50 }, "-=0.9");
            return;
        }
    }, [index, key]);

    useEffect(() => {
        const t1 = gsap.timeline();

        if (props.location.pathname === "/") {
            t1.from(".overlay", { duration: 0.5, yPercent: 100 })
                .from("header, .indicator-bar ,.indicator-bar-m", { duration: 0.5, opacity: 0, yPercent: -100 })
                .from(".intro", { opacity: 0, x: -75 })
                .from(".lines", { opacity: 0 })
                .from(".info", { duration: 0.5, opacity: 0, x: -50 }, "-=0.7")
                .from("img", { duration: 0.5, opacity: 0, x: 50 }, "-=0.9");
        } else if (props.location.pathname === "/about") {
            t1.from(".overlay", { duration: 0.5, xPercent: -100 }).from("header", { duration: 0.5, opacity: 0, xPercent: 100 }).from(".test", { opacity: 0 });
        }
    }, [props.location.pathname]);

    console.log(index, "I");

    return (
        <div className="container">
            <Overlay />
            <Navigation />
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <>
                            <Indicator />
                            <div className="content">{renderComponent()}</div>
                        </>
                    )}
                />
                <Route
                    path="/about"
                    exact
                    render={() => (
                        <>
                            <div className="test" style={{ position: "absolute", top: "15%", width: "100%", height: "100vh", backgroundColor: "white" }} />
                        </>
                    )}
                />
            </Switch>
        </div>
    );
}

export default withRouter(App);
