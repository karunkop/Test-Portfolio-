import React from "react";
import Code from "../assets/code.png";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
            // duration:'0.8'
        },
    },
};

const item = {
    hidden: { x: "-50%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            type: "tween",
            ease: "easeInOut",
        },
    },
};

const image = {
    hidden: { x: "50%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            type: "tween",
            ease: "easeInOut",
        },
    },
};

export const _Home = ({ direction }) => {
    return (
        <motion.div
            className="home-container"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: direction === "up" ? "100vh" : "-100vh" }}
            transition={{ type: "tween", ease: "anticipate", duration: 1 }}
        >
            <motion.div
                style={{ overflowX: "hidden", padding: "0 0 0 7%" }}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={item} className="intro">
                    <motion.h1>
                        KARUN <br /> SHRESTHA
                    </motion.h1>
                </motion.div>

                <motion.div variants={item} className="lines">
                    <div className="bar" />
                    <br />
                    <div style={{ display: "none" }} className="bar" />
                </motion.div>
                <motion.div variants={item} className="info">
                    <motion.p>
                        Web Designer / <br /> An Aspiring Developer...
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ overflow: "hidden" }}
            >
                <motion.img variants={image} src={Code} alt="Code" />
                <motion.h1 variants={image} className="text">
                    <span className="port">"PORT</span>FOLIO"
                </motion.h1>
            </motion.div>
        </motion.div>
    );
};

export const _About = ({ direction }) => {
    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0, y: direction === "up" ? "-100vh" : "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: direction === "up" ? "100vh" : "-100vh" }}
            transition={{ type: "tween", ease: "anticipate", duration: 1 }}
        >
            <div
                className="whole"
                style={{ position: "relative", overflow: "hidden", padding: "0 0 0 7%" }}
            >
                <div className="intro">
                    <motion.h1>About Me</motion.h1>
                </div>

                <motion.div className="lines">
                    <div className="bar" />
                    <br />
                    <div style={{ display: "none" }} className="bar" />
                </motion.div>
                <div className="info">
                    <motion.p>
                        Web Designer / <br /> An Aspiring Developer...
                    </motion.p>
                </div>
            </div>
            <motion.img src={Code} alt="Code" />
            <motion.h1 className="text">
                <span className="port">"PORT</span>FOLIO"
            </motion.h1>
        </motion.div>
    );
};
