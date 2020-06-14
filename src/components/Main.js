import React, { useEffect, useContext } from "react";
import { animated, useSpring } from "react-spring";
import { GlobalContext } from "../context/GlobalState";
import { Home, AboutPage } from "../pages/Home";
import { easePolyInOut } from "d3-ease";

const MAX_INDEX = 3;
const SPRING_CONFIG = { duration: 1100, easing: easePolyInOut };

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

            setIndex(index => index + 1);
            animationStatusRef.current = true;
        } else if (direction === "up" && indexRef.current > 0) {
            prevPage();

            setIndex(index => index - 1);
            animationStatusRef.current = true;
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
                    <AboutPage
                        number="01"
                        title="About Me"
                        para={["I love Design, Technology /", "An Story"]}
                        tag="box"
                        active={index === 1}
                    />
                </div>
                <div id="works" className="inner-main">
                    <AboutPage
                        number="02"
                        title="Recent Works"
                        tag="work"
                        para={["Been working and Practising", "React / NodeJS"]}
                        active={index === 2}
                    />
                </div>
                <div id="contact" className="inner-main">
                    <AboutPage
                        number="03"
                        title="Get In Touch"
                        tag="contact"
                        para={["karunkop@gmail.com", "+977 9861538501"]}
                        active={index === 3}
                    />
                </div>
            </animated.div>
        </div>
    );
};

export default Main;
