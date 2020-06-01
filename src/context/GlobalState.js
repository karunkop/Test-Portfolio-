import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    globalIndex: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function nextPage() {
        dispatch({
            type: "NEXT_PAGE",
        });
    }
    function prevPage() {
        dispatch({
            type: "PREV_PAGE",
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                index: state.globalIndex,
                nextPage,
                prevPage,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
