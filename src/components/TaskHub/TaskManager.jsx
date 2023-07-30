import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import MainTasks from "./Main/MainTasks";
import SideBar from "./Side/SideBar.jsx";
import Loading from "../General/Others/Loading";
import { isLogedIn } from "../../controllers/user/functions";
import { getUserSpace } from "../../controllers/spaces/functions";
import { getUserTasks } from "../../controllers/tasks/functions";

function TaskManager() {
  const { setCurrentSpace, setTasks, loading, handelLoading } = useContext(Context);

  const handelInit = async () => {
    isLogedIn();

    const path = window.location.pathname;
    if (path.includes("/manager/space/")) {
      const spaceId = path.split("/manager/space/")[1];
      getUserSpace(spaceId).then((space) => {
        if (!space) window.location.href = "/manager";
        else setCurrentSpace(space);
        getUserTasks(space.id).then((tasks) => {
          setTasks(tasks);
          handelLoading();
        });
      });
    }
  };

  useEffect(() => {
    handelInit();
  }, []);

  return !loading ? (
    <div className="h-screen w-full flex flex-col">
      <SideBar />
      <MainTasks />
    </div>
  ) : (
    <Loading />
  );
}

export default TaskManager;
