import React, { createContext, useState } from "react";
import Loading from "../components/General/Others/Loading";
export const Context = createContext();

export function ContextProvider({ children, value: { getUser, getUserSpaces, getUserTasks, updateTaskStatus,...other } }) {
  //USER
  const [user, loading] = getUser();

  // SECTIONS
  const [currentSection, setCurrentSection] = useState("");
  const [spaces, setSpaces] = useState([]);
  const [currentSpace, setCurrentSpace] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  // MENUS
  const [openSideBar, setOpenSideBar] = useState(false);
  const handelSideBarDisplay = () => { setOpenSideBar(!openSideBar); if (openConfigMenu) setOpenConfigMenu(false) };
  const [openConfigMenu, setOpenConfigMenu] = useState(false);
  const [openCreateSpace, setOpenCreateSpace] = useState(false);
  const [openSpaceSelector, setOpenSpaceSelector] = useState(false);
  const handleOpenSpaceSelector = () => setOpenSpaceSelector(!openSpaceSelector);
  const [openSpaces, setOpenSpaces] = useState(false);
  const handelSpacesMenu = () => setOpenSpaces(!openSpaces);
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const handleCreateTaskModal = () => setOpenCreateTask(!openCreateTask);
  const [openEditTask, setOpenEditTask] = useState(false);
  const handelEditModal = () => { setOpenEditTask(!openEditTask); if (openStatus) setOpenStatus(false); if (openPriority) setOpenPriority(false) };
  const [openStatus, setOpenStatus] = useState(false);
  const handelStatusModal = () => setOpenStatus(!openStatus);
  const [openPriority, setOpenPriority] = useState(false);
  const handelPriorityModal = () => setOpenPriority(!openPriority);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const handelConfirmDeleteModal = () => setOpenConfirmDelete(!openConfirmDelete);

  // FUNTIONS
  const handelGetTasks = () => getUserTasks(currentSpace.id).then((tasks) => setTasks(tasks));
  const handelInitTask = async () => {
    const path = window.location.pathname;
    
    if (user) {
      getUserSpaces(user.uid).then((spaces) => {
        setSpaces(spaces);
        if (path.includes("/manager/space/")) {
          const spaceId = path.split("/manager/space/")[1];
          const space = spaces.find((space) => space.id === spaceId);
          if (!space) window.location.href = "/manager";
          else{
            setCurrentSpace(space);
            getUserTasks(spaceId).then((tasks) => setTasks(tasks));
          }
        }
      });
    } else {
      console.log("No user");
    }
  };

  // DRAG AND DROP
  const [dragOverStatus, setDragOverStatus] = useState(null);
  
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e, status) => {
    e.preventDefault();
    setDragOverStatus(status);
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('text/plain');
    const task = tasks[dragIndex];
    if (status !== task.status) {
      const updatedTasks = tasks.filter((_, i) => i != dragIndex); // Filtrar la tarea que se está arrastrando
      task.status = status;
      setTasks([...updatedTasks, task]); // Agregar la tarea actualizada en su nuevo estado
      updateTaskStatus(task.id, status); // Actualizar el estado de la tarea en la base de datos
    }
    setDragOverStatus(null);
    
  };

  const functions = {
    user, loading,
    handelInitTask,
    currentSection, setCurrentSection,
    currentSpace, setCurrentSpace,
    spaces, setSpaces,
    tasks, setTasks,
    currentTask, setCurrentTask,
    openSideBar, handelSideBarDisplay,
    openConfigMenu, setOpenConfigMenu,
    openCreateSpace, setOpenCreateSpace,
    openSpaceSelector, setOpenSpaceSelector, handleOpenSpaceSelector,
    openSpaces, setOpenSpaces, handelSpacesMenu,
    openCreateTask, setOpenCreateTask, handleCreateTaskModal,
    openEditTask, handelEditModal,
    openStatus, handelStatusModal,
    openPriority, handelPriorityModal,
    openConfirmDelete, handelConfirmDeleteModal,
    handelGetTasks,
    dragOverStatus, setDragOverStatus,
    handleDragStart,
    handleDragOver,
    handleDrop,
  };

  return (
  <Context.Provider value={{ ...functions, ...other }}>
    {loading ?
      <Loading />
      :
    children}
  </Context.Provider>
  )
}
