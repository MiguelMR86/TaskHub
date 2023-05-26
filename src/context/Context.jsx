import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {

    // MENUS AND SECTIONS
    const [currentSection, setCurrentSection] = useState("Home");
    const [openSideBar, setOpenSideBar] = useState(false);
    const [openConfigMenu, setOpenConfigMenu] = useState(false)

    const handelSideBarDisplay = () => {
        if (openConfigMenu) {
          setOpenConfigMenu(false)
        }
        setOpenSideBar(!openSideBar)
    }

    const functions = {
        currentSection, setCurrentSection,
        openSideBar, setOpenSideBar,
        openConfigMenu, setOpenConfigMenu,
        handelSideBarDisplay
    };

    return (
        <Context.Provider value={functions}>
            {children}
        </Context.Provider>
    );
};
