import React, { useEffect, useContext } from "react";
import { animated, useSpring } from "react-spring";
import { GlobalContext } from "../context/GlobalState";
import { Home, AboutPage } from "../pages/Home";

const MAX_INDEX = 3;
const SPRING_CONFIG = { mass: 3, tension: 260, friction: 60 };

const Main = () => {
    const { nextPage, prevPage } = useContext(GlobalContext); //Context

    const [index, setIndex] = React.useState(0);
    const indexRef = React.useRef(0);
    const animationStatusRef = React.useRef(false);
    const { y } = useSpring({
        to: { y: index * 90 },
        config: SPRING_CONFIG,
        onRest: () => (animationStatusRef.current = false),
    });

    useEffect(() => {
        indexRef.current = index;
    }, [index]);

    const scrollHandler = direction => {
        if (animationStatusRef.current) return;

        if (direction === "down" && indexRef.current < MAX_INDEX) {
            nextPage();
            animationStatusRef.current = true;
            setIndex(index => index + 1);
        } else if (direction === "up" && indexRef.current > 0) {
            prevPage();
            animationStatusRef.current = true;
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
        <div className="main" id="main" onWheel={handleWheelEvent}>
            <animated.div style={{ transform: y.interpolate(_y => `translateY(-${_y}vh)`) }}>
                <div id="home" className="inner-main">
                    <Home active={index === 0} />
                </div>
                <div id="about" className="inner-main">
                    {/* <h1>THERE</h1> */}
                    <AboutPage active={index === 1} />
                </div>
                <div id="works" className="inner-main">
                    <h1>WOW</h1>
                </div>
                <div id="contact" className="inner-main">
                    <h1>HAHA</h1>
                </div>
            </animated.div>
        </div>
    );
};

export default Main;
