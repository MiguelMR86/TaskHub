import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import MainContent from "../components/TaskHub/Main/MainContent";
import SideBar from "../components/TaskHub/Side/SideBar";
import Loading from "../components/General/Others/Loading";

function TaskManager() {
  // Pending to remove load
  const { handelInitTask, load } = useContext(Context);

  useEffect(() => {
    handelInitTask();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default TaskManager;
