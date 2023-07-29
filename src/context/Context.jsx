import React, { createContext, useState } from "react";
import { getUserTasks } from "../controllers/tasks/functions";

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

  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openPriority, setOpenPriority] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  // FUNTIONS
  const handelSideBarDisplay = () => {
    setOpenSideBar(!openSideBar);
    if (openConfigMenu) setOpenConfigMenu(false);
  };
  const handelSpacesMenu = () => setOpenSpaces(!openSpaces);
  const handelGetTasks = () => getUserTasks(currentSpace.id).then((tasks) => setTasks(tasks));
  const handelEditModal = () => {
    setOpenEditTask(!openEditTask);
    if (openStatus) setOpenStatus(false);
    if (openPriority) setOpenPriority(false);
  };
  const handelStatusModal = () => setOpenStatus(!openStatus);
  const handelPriorityModal = () => setOpenPriority(!openPriority);
  const handelConfirmDeleteModal = () => setOpenConfirmDelete(!openConfirmDelete);
  const handleCreateTaskModal = () => setOpenCreateTask(!openCreateTask);

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
    openCreateTask, setOpenCreateTask,
    openEditTask, handelEditModal,
    openStatus, handelStatusModal,
    openPriority, handelPriorityModal,
    openConfirmDelete, handelConfirmDeleteModal,
    handelSpacesMenu,
    handelGetTasks,
    handleCreateTaskModal,
  };

  return <Context.Provider value={functions}>{children}</Context.Provider>;
}
