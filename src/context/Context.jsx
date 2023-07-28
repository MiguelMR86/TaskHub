import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  // SECTIONS
  const [currentSection, setCurrentSection] = useState("");
  const [spaces, setSpaces] = useState([]);
  const [currentSpace, setCurrentSpace] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  // MENUS
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openConfigMenu, setOpenConfigMenu] = useState(false);
  const [openCreateSpace, setOpenCreateSpace] = useState(false);
  const [openSpaceSelector, setOpenSpaceSelector] = useState(false);
  const [openSpaces, setOpenSpaces] = useState(false);
  const [openTasks, setOpenTasks] = useState(false);
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openTaskSelector, setOpenTaskSelector] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openPriorityFlag, setOpenPriorityFlag] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  // FUNTIONS
  const handelSideBarDisplay = () => {
    setOpenSideBar(!openSideBar);
    if (openConfigMenu) setOpenConfigMenu(false);
  };
  const handelSpacesMenu = () => setOpenSpaces(!openSpaces);
  const handelTasksMenu = () => setOpenTasks(!openTasks);
  const handelEditModal = () => {
    setOpenEditTask(!openEditTask);
    if (openStatus) setOpenStatus(false);
  };
  const handelStatusModal = () => setOpenStatus(!openStatus);
  const handelPriorityFlagModal = () => setOpenPriorityFlag(!openPriorityFlag);
  const handelConfirmDeleteModal = () => setOpenConfirmDelete(!openConfirmDelete);
  const handelTaskSelector = () => setOpenTaskSelector(!openTaskSelector);
  const handleSpaceSelectorModals = () => {
    setOpenTaskSelector(!openSpaceSelector);
    setOpenCreateTask(!openCreateSpace);
    handelTaskSelector();
  };

  const functions = {
    currentSection, setCurrentSection,
    currentSpace, setCurrentSpace,
    spaces, setSpaces,
    tasks, setTasks,
    currentTask, setCurrentTask,
    openSideBar, handelSideBarDisplay,
    openConfigMenu, setOpenConfigMenu,
    openCreateSpace, setOpenCreateSpace,
    openSpaceSelector, setOpenSpaceSelector,
    openSpaces, setOpenSpaces,
    openTasks, setOpenTasks,
    openCreateTask, setOpenCreateTask,
    openEditTask, handelEditModal,
    openStatus, handelStatusModal,
    openPriorityFlag, handelPriorityFlagModal,
    openConfirmDelete, handelConfirmDeleteModal,
    openTaskSelector, handelTaskSelector,
    handelSpacesMenu, 
    handelTasksMenu,
    handleSpaceSelectorModals,
  };

  return <Context.Provider value={functions}>{children}</Context.Provider>;
}
