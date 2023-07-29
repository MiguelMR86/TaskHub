import React, { useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import MainContent from "./Main/MainContent";
import SideBar from "./Side/SideBar.jsx";
import { isLogedIn } from "../../controllers/user/functions";
import { getUserSpace } from "../../controllers/spaces/functions";

function TaskManager() {
  const { setCurrentSpace } = useContext(Context);

  useEffect(() => {
    
    isLogedIn()

    // GET paths
    const path = window.location.pathname;
    if (path.includes("/manager/space/")) {
      const spaceId = path.split("/manager/space/")[1];
      getUserSpace(spaceId).then((space) => {
        if (!space) window.location.href = "/manager";
        else setCurrentSpace(space);
      });
    }
  }, []);
  
  return (
    <div className="h-screen w-full flex flex-col">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default TaskManager;
