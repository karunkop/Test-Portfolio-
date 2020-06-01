import React from "react";
import { animated, useTrail } from "react-spring";
import Code from "../assets/code.png";
import { ReactComponent as About } from "../assets/about.svg";

const SPRING_CONFIG = { mass: 3, tension: 260, friction: 50 };

export const Home = ({ active }) => {
    const animationArray = useTrail(2, {
        from: active
            ? {
                  opacity: 0,
                  x: 50,
              }
            : {},
        to: {
            opacity: 1,
            x: 0,
        },
        config: SPRING_CONFIG,
        reset: true,
    });
    const animationArray1 = useTrail(2, {
        from: {
            opacity: 0,
            x: 50,
        },
        to: {
            opacity: active ? 1 : 0,
            x: active ? 0 : 50,
        },
        config: SPRING_CONFIG,
    });

    return (
        <div className="home-container">
            <div style={{ overflow: "hidden" }}>
                <div className="intro">
                    <animated.h1
                        style={{
                            opacity: animationArray[0].opacity,
                            transform: animationArray[0].x.interpolate(_x => `translateX(-${_x}rem)`),
                        }}
                    >
                        KARUN <br /> SHRESTHA
                    </animated.h1>
                </div>

                <animated.div style={{ opacity: animationArray[1].opacity, transform: animationArray[1].x.interpolate(_x => `translateX(-${_x}rem)`) }} className="lines">
                    <div className="bar" />
                    <br />
                    <div style={{ display: "none" }} className="bar" />
                </animated.div>
                <div className="info">
                    <animated.p style={{ opacity: animationArray[1].opacity, transform: animationArray[1].x.interpolate(_x => `translateX(-${_x}rem)`) }}>
                        Web Designer / <br /> An Aspiring Developer...
                    </animated.p>
                </div>
            </div>
            <animated.img style={{ opacity: animationArray1[0].opacity, transform: animationArray1[0].x.interpolate(_x => `translateX(${_x}rem)`) }} src={Code} alt="Code" />
            <animated.h1 style={{ opacity: animationArray1[1].opacity, transform: animationArray1[1].x.interpolate(_x => `translateX(${_x}rem)`) }} className="text">
                <span className="port">"PORT</span>FOLIO"
            </animated.h1>
        </div>
    );
};
export const AboutPage = ({ active }) => {
    const animationArray = useTrail(2, {
        from: active
            ? {
                  opacity: 0,
                  x: 50,
              }
            : {},
        to: {
            opacity: 1,
            x: 0,
        },
        config: SPRING_CONFIG,
        reset: true,
    });
    const animationArray1 = useTrail(2, {
        from: {
            opacity: 0,
            x: 50,
        },
        to: {
            opacity: active ? 1 : 0,
            x: active ? 0 : 50,
        },
        config: SPRING_CONFIG,
    });

    return (
        <div className="home-container">
            <div style={{ overflow: "hidden" }}>
                <div className="intro">
                    <animated.h1
                        style={{
                            letterSpacing: "1.5rem",
                            opacity: animationArray[0].opacity,
                            transform: animationArray[0].x.interpolate(_x => `translateX(-${_x}rem)`),
                        }}
                    >
                        ABOUT ME
                    </animated.h1>
                </div>

                <animated.div style={{ opacity: animationArray[1].opacity, transform: animationArray[1].x.interpolate(_x => `translateX(-${_x}rem)`) }} className="lines">
                    <div className="bar" />
                    <br />
                    <div style={{ display: "none" }} className="bar" />
                </animated.div>
                <div className="info">
                    <animated.p style={{ opacity: animationArray[1].opacity, transform: animationArray[1].x.interpolate(_x => `translateX(-${_x}rem)`) }}>
                        I love Design, Technology / <br /> an Story..
                    </animated.p>
                </div>
            </div>
            {/* <animated.About className="svg" style={{ width: "200px", opacity: animationArray1[0].opacity, transform: animationArray1[0].x.interpolate(_x => `translateX(${_x}rem)`) }} /> */}
            {/* <animated.h1 style={{ opacity: animationArray1[1].opacity, transform: animationArray1[1].x.interpolate(_x => `translateX(${_x}rem)`) }} className="text">
                <span className="port">"PORT</span>FOLIO"
            </animated.h1> */}
        </div>
    );
};
