import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {

    // MENUS AND SECTIONS
    const [currentSection, setCurrentSection] = useState("Board");
    const [openSideBar, setOpenSideBar] = useState(true);
    const [openConfigMenu, setOpenConfigMenu] = useState(false)
    const [openCreateSpace, setOpenCreateSpace] = useState(false)
    const [openSpacesSelector, setOpenSpacesSelector] = useState(false)
    const [currentSpace, setCurrentSpace] = useState(null)
    const [spaces, setSpaces] = useState([]);

    // USER
    const [logedIn, setLogedIn] = useState(false);

    // FUNTIONS
    const handelSideBarDisplay = () => {
        setOpenSideBar(!openSideBar)
        if (openConfigMenu) setOpenConfigMenu(false)
    }

    const functions = {
        currentSection, setCurrentSection,
        openSideBar, setOpenSideBar,
        openConfigMenu, setOpenConfigMenu,
        openCreateSpace, setOpenCreateSpace,
        openSpacesSelector, setOpenSpacesSelector,
        currentSpace, setCurrentSpace,
        spaces, setSpaces,
        logedIn, setLogedIn,
        handelSideBarDisplay
    };

    return (
        <Context.Provider value={functions}>
            {children}
        </Context.Provider>
    );
};