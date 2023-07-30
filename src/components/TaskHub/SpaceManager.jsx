import React, { useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import MainSpaces from "./Main/MainSpaces";
import SideBar from "./Side/SideBar.jsx";
import { isLogedIn } from "../../controllers/user/functions";
import { getUserSpace } from "../../controllers/spaces/functions";
import { getUserTasks } from "../../controllers/tasks/functions";

function TaskManager() {
  const {  } = useContext(Context);
  
  const handelInit = async () => {
    isLogedIn();
  };

  useEffect(() => {
    handelInit();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <SideBar />
      <MainSpaces />
    </div>
  );
}

export default TaskManager;
