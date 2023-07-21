import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {

    // MENUS AND SECTIONS
    const [currentSection, setCurrentSection] = useState("Board");
    const [openSideBar, setOpenSideBar] = useState(true);
    const [openConfigMenu, setOpenConfigMenu] = useState(false)
    const [openSpacesMenu, setOpenSpacesMenu] = useState(false)
    const [openCreateSpace, setOpenCreateSpace] = useState(false)
    const [openSpacesSelector, setOpenSpacesSelector] = useState(false)
    const [currentSpace, setCurrentSpace] = useState()
    const [spaces, setSpaces] = useState([]);

    // USER
    const [logedIn, setLogedIn] = useState(false);

    // FUNTIONS
    const handelSideBarDisplay = () => {
        setOpenSideBar(!openSideBar)
        if (openConfigMenu) setOpenConfigMenu(false)
        if (openSpacesMenu) setOpenSpacesMenu(false)
    }

    const functions = {
        currentSection, setCurrentSection,
        openSideBar, setOpenSideBar,
        openConfigMenu, setOpenConfigMenu,
        openSpacesMenu, setOpenSpacesMenu,
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
