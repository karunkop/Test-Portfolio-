import React from "react";
import Indicator from "./components/indicator";
import "./style.scss";
import { Navigation } from "./components/Navigation";
import Main from "./components/Main";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
    return (
        <GlobalProvider>
            <div className="container">
                <Indicator />
                <Navigation />
                <Main />
            </div>
        </GlobalProvider>
    );
};

export default App;
