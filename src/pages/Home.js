import React from "react";
import { animated, useTrail } from "react-spring";
import Code from "../assets/code.png";
import { easeCubicInOut } from "d3-ease";

const SPRING_CONFIG = { mass: 2.5, tension: 170, friction: 40 };

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
            x: 65,
        },
        to: {
            opacity: active ? 1 : 0,
            x: active ? 0 : 65,
        },
        config: SPRING_CONFIG,
    });

    return (
        <div className="home-container">
            <div style={{ position: "relative", overflow: "hidden", padding: "0 0 0 2%" }}>
                <div className="intro">
                    <animated.h1
                        style={{
                            letterSpacing: "1.5rem",
                            // fontSize: "100px",
                            opacity: animationArray[0].opacity,
                            transform: animationArray[0].x.interpolate(
                                _x => `translateX(-${_x}rem)`
                            ),
                        }}
                    >
                        KARUN <br /> SHRESTHA
                    </animated.h1>
                </div>

                <animated.div
                    style={{
                        opacity: animationArray[1].opacity,
                        transform: animationArray[1].x.interpolate(_x => `translateX(-${_x}rem)`),
                    }}
                    className="lines"
                >
                    <div className="bar" />
                    <br />
                    <div style={{ display: "none" }} className="bar" />
                </animated.div>
                <div className="info">
                    <animated.p
                        style={{
                            opacity: animationArray[1].opacity,
                            transform: animationArray[1].x.interpolate(
                                _x => `translateX(-${_x}rem)`
                            ),
                        }}
                    >
                        Web Designer / <br /> An Aspiring Developer...
                    </animated.p>
                </div>
            </div>
            <animated.img
                style={{
                    opacity: animationArray1[0].opacity,
                    transform: animationArray1[0].x.interpolate(_x => `translateX(${_x}rem)`),
                }}
                src={Code}
                alt="Code"
            />
            <animated.h1
                style={{
                    opacity: animationArray1[1].opacity,
                    transform: animationArray1[1].x.interpolate(_x => `translateX(${_x}rem)`),
                }}
                className="text"
            >
                <span className="port">"PORT</span>FOLIO"
            </animated.h1>
        </div>
    );
};

export const AboutPage = ({ active, number, para, title, tag }) => {
    const animationArray = useTrail(3, {
        from: active
            ? {
                  opacity: 0,
                  x: 65,
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
        from: active
            ? {
                  opacity: 0,
                  x: -650,
              }
            : {},
        to: {
            opacity: 1,
            x: 650,
        },
        config: { mass: 3, tension: 150, friction: 50 },
        reset: true,
    });

    return (
        <div className="home-container" style={{}}>
            <div
                style={{
                    // backgroundColor: "rgba(0,0,0,0.5)",
                    position: "relative",
                    overflow: "hidden",
                    padding: "4% 0 2% 2%",
                }}
            >
                <div className="intro">
                    <animated.h1
                        style={{
                            letterSpacing: "1.2rem",
                            opacity: animationArray[0].opacity,
                            transform: animationArray[0].x.interpolate(
                                _x => `translateX(-${_x}rem)`
                            ),
                        }}
                    >
                        {title}
                    </animated.h1>
                </div>

                <animated.div
                    style={{
                        opacity: animationArray[1].opacity,
                        transform: animationArray[1].x.interpolate(_x => `translateX(-${_x}rem)`),
                    }}
                    className="lines"
                >
                    <div className="bar" />
                    <br />
                    <div style={{ display: "none" }} className="bar" />
                </animated.div>
                <div className="info">
                    <animated.p
                        style={{
                            opacity: animationArray[1].opacity,
                            transform: animationArray[1].x.interpolate(
                                _x => `translateX(-${_x}rem)`
                            ),
                        }}
                    >
                        {para[0]} <br /> <br />
                        {para[1]}..
                    </animated.p>
                </div>
                {number !== "03" ? (
                    <animated.div
                        style={{
                            opacity: animationArray[2].opacity,
                            transform: animationArray[2].x.interpolate(
                                _x => `translateX(-${_x}rem)`
                            ),
                        }}
                        className="button"
                    >
                        Show me More
                    </animated.div>
                ) : null}
            </div>

            <div
                className={tag}
                style={{
                    position: "absolute",
                    top: "8%",
                    right: "8%",
                    zIndex: "-1",
                    width: "650px",
                    height: "450px",
                    overflow: "hidden",
                }}
            >
                {/* <div className="overlay" /> */}
                <animated.div
                    style={{
                        opacity: animationArray1[0].opacity,
                        transform: animationArray1[0].x.interpolate(_x => `translateX(${_x}px)`),
                        height: "100%",
                        width: animationArray1[0].x.interpolate(_x => `${_x / 4}px`),
                        background: "#FF4D5A",
                    }}
                ></animated.div>
            </div>
            {/* <div style={{ overflow: "hidden" }}> */}
            <animated.h1
                style={{
                    opacity: animationArray[1].opacity,
                    transform: animationArray[1].x.interpolate(_x => `translateY(${_x}rem)`),
                }}
                className="num"
            >
                {number}
            </animated.h1>
            {/* </div> */}
        </div>
    );
};
