import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { GlobalContext } from "../context/GlobalState";

const Indicator = () => {
    const { index } = useContext(GlobalContext);
    const [lineArray] = React.useState([0, 1, 2, 3]);

    const props = useSpring({
        from: { opacity: 0, transform: `translateX(-100px)` },
        to: { opacity: 1, transform: `translateX(0)` },
    });
    const props1 = useSpring({
        from: { opacity: 0, transform: `translateY(100px)` },
        to: { opacity: 1, transform: `translateX(0)` },
    });

    React.useEffect(() => {}, [index]);

    const renderIndicators = type => {
        switch (type) {
            case "M":
                return lineArray.map(line => <div key={line} className="lines" style={{ minHeight: `${index === line ? "40px" : "20px"}` }} />);

            default:
                return lineArray.map(line => <div key={line} className="lines" style={{ minWidth: `${index === line ? "52px" : "25px"}` }} />);
        }
    };

    return (
        <>
            <animated.div style={props} className="indicator-bar">
                <div className="collection">{renderIndicators()}</div>
            </animated.div>
            <animated.div style={props1} className="indicator-bar-m">
                <div className="collection-m">{renderIndicators("M")}</div>
            </animated.div>
        </>
    );
};

export default Indicator;
