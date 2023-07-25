import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
        
    // SECTIONS
    const [currentSection, setCurrentSection] = useState("Board");
    const [currentSpace, setCurrentSpace] = useState(null)
    const [spaces, setSpaces] = useState([]);
    const [tasks, setTasks] = useState([]);
    
    // MENUS 
    const [openSideBar, setOpenSideBar] = useState(true);
    const [openConfigMenu, setOpenConfigMenu] = useState(false)
    const [openCreateSpace, setOpenCreateSpace] = useState(false)
    const [openSpaceSelector, setOpenSpaceSelector] = useState(false)
    const [openSpaces, setOpenSpaces] = useState(false)
    const [openTasks, setOpenTasks] = useState(false)

    // FUNTIONS
    const handelSideBarDisplay = () => {
        setOpenSideBar(!openSideBar)
        if (openConfigMenu) setOpenConfigMenu(false)
    }
    const handelSpacesMenu = () => setOpenSpaces(!openSpaces)
    const handelTasksMenu = () => setOpenTasks(!openTasks)

    const functions = {
        currentSection, setCurrentSection,
        currentSpace, setCurrentSpace,
        spaces, setSpaces,
        tasks, setTasks,
        openSideBar,
        openConfigMenu, setOpenConfigMenu,
        openCreateSpace, setOpenCreateSpace,
        openSpaceSelector, setOpenSpaceSelector,
        openSpaces, setOpenSpaces,
        openTasks, setOpenTasks, 
        handelSpacesMenu,
        handelTasksMenu,
        handelSideBarDisplay
    };

    return (
        <Context.Provider value={functions}>
            {children}
        </Context.Provider>
    );
};