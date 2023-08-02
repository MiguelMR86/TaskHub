import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import MainContent from "../components/TaskHub/Main/MainContent";
import SideBar from "../components/TaskHub/Side/SideBar";
import Loading from "../components/General/Others/Loading";

function TaskManager() {
  const { handelInitTask, LoadingTasks } = useContext(Context);

  useEffect(() => {
    handelInitTask();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      {LoadingTasks ? (
        <Loading />
      ) : (
        <>
          <SideBar />
          <MainContent />
        </>
      )}
    </div>
  );
}

export default TaskManager;
