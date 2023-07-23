import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    
    // USER
    const [logedIn, setLogedIn] = useState(false);
    
    // SECTIONS
    const [currentSection, setCurrentSection] = useState("Board");
    const [currentSpace, setCurrentSpace] = useState(null)
    const [spaces, setSpaces] = useState([]);
    
    // MENUS 
    const [openSideBar, setOpenSideBar] = useState(true);
    const [openConfigMenu, setOpenConfigMenu] = useState(false)
    const [openCreateSpace, setOpenCreateSpace] = useState(false)
    const [openSpaceSelector, setOpenSpaceSelector] = useState(false)
    const [openSpaces, setOpenSpaces] = useState(false)
    const [openTaskSelector, setOpenTaskSelector] = useState(false)

    // FUNTIONS
    const handelSideBarDisplay = () => {
        setOpenSideBar(!openSideBar)
        if (openConfigMenu) setOpenConfigMenu(false)
    }

    const handelSpacesMenu = () => setOpenSpaces(!openSpaces)

    const functions = {
        logedIn, setLogedIn,
        currentSection, setCurrentSection,
        currentSpace, setCurrentSpace,
        spaces, setSpaces,
        openSideBar,
        openConfigMenu, setOpenConfigMenu,
        openCreateSpace, setOpenCreateSpace,
        openSpaceSelector, setOpenSpaceSelector,
        openSpaces, setOpenSpaces, 
        handelSpacesMenu,
        handelSideBarDisplay
    };

    return (
        <Context.Provider value={functions}>
            {children}
        </Context.Provider>
    );
};