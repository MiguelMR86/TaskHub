import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
        
    // SECTIONS
    const [currentSection, setCurrentSection] = useState("Board");
    const [spaces, setSpaces] = useState([]);
    const [currentSpace, setCurrentSpace] = useState(null)
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null)
    
    // MENUS 
    const [openSideBar, setOpenSideBar] = useState(true);
    const [openConfigMenu, setOpenConfigMenu] = useState(false)
    const [openCreateSpace, setOpenCreateSpace] = useState(false)
    const [openSpaceSelector, setOpenSpaceSelector] = useState(false)
    const [openSpaces, setOpenSpaces] = useState(false)
    const [openTasks, setOpenTasks] = useState(false)
    const [openCreateTask, setOpenCreateTask] = useState(false)

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
        currentTask, setCurrentTask,
        openSideBar,
        openConfigMenu, setOpenConfigMenu,
        openCreateSpace, setOpenCreateSpace,
        openSpaceSelector, setOpenSpaceSelector,
        openSpaces, setOpenSpaces,
        openTasks, setOpenTasks,
        openCreateTask, setOpenCreateTask,
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