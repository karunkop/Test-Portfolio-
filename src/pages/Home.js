import React, { useEffect } from "react";
import Code from "../assets/code.png";
import gsap from "gsap";

export const Home = ({ name }) => {
    useEffect(() => {
        return () => {
            const t1 = gsap.timeline();
            t1.to(".info,.intro, .lines", { opacity: 0, x: -50 }).to("img", { opacity: 0, x: 50 }, "-=0.6");
        };
    });
    return (
        <div className="home-container">
            <div className="left">
                <div className="intro">
                    <h1>{name}</h1>
                    <h1>SHRESTHA</h1>
                </div>
                <div className="lines">
                    <div className="bar" />
                    {/* <div></div> */}
                </div>
                <div className="info">
                    <p>Web Designer / </p>
                    <br />
                    <p>An aspiring Developer...</p>
                </div>
            </div>
            <img src={Code} alt="Code" />
        </div>
    );
};
export const About = ({ name }) => {
    useEffect(() => {
        return () => {
            const t1 = gsap.timeline();
            t1.to(".info,.intro, .lines", { opacity: 0, x: -50 }).to("img", { opacity: 0, x: 50 }, "-=0.6");
        };
    });
    return (
        <div className="home-container">
            <div className="left">
                <div className="intro">
                    <h1>{name}</h1>
                    <h1>ME</h1>
                </div>
                <div className="lines">
                    <div className="bar" />
                    {/* <div></div> */}
                </div>
                <div className="info">
                    <p>Learn More / </p>
                    <br />
                    <p>An aspiring Developer...</p>
                </div>
            </div>
            <img src={Code} alt="Code" />
        </div>
    );
};
