import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    const [currentSection, setCurrentSection] = useState("Home");
    const [openSideBar, setOpenSideBar] = useState(false);


    const functions = {
        currentSection, setCurrentSection,
        openSideBar, setOpenSideBar,
    };

    return (
        <Context.Provider value={functions}>
            {children}
        </Context.Provider>
    );
};
