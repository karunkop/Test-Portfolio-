import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalContext } from "../context/GlobalState";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import { _Home, _About } from "../pages/_Home";

const MAX_INDEX = 3;

const mapRoutes = {
    0: "/",
    1: "/about",
    2: "/works",
    3: "/contact",
};

const MainHeroSection = props => {
    const { nextPage, prevPage } = useContext(GlobalContext); //Context

    const [index, setIndex] = useState(0);

    const [direction,setDirection] = useState('')

    const location = useLocation();

    useEffect(() => {
        props.history.push(`${mapRoutes[index]}`);
    }, [index]);

    const scrollHandler = direction => {
        setDirection(direction)
        if (direction === "down" && index < MAX_INDEX) {
            nextPage();
            setIndex(index => index + 1);
        } else if (direction === "up" && index > 0) {
            prevPage();

            setIndex(index => index - 1);
        }
    };

    const handleWheelEvent = e => {
        // scroll up
        if (e.deltaY < 0) scrollHandler("up");
        // scroll down
        else scrollHandler("down");
    };

    return (
        <div style={{ height: "90vh" }} className="__main__" onWheel={handleWheelEvent}>
            <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <_Home direction={direction} />} />
                <Route exact path="/about" render={() => <_About direction={direction} />} />
                <Route exact path="/works" render={() => <h1>works</h1>} />
                <Route exact path="/contact" render={() => <h1>contact</h1>} />
            </Switch>
            </AnimatePresence>
        </div>
    );
};

export default withRouter(MainHeroSection);
