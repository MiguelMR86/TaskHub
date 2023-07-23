import React, { useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import NavBar from "./Nav/NavBar";
import MainContent from "./Main/MainContent";
import SideBar from "./Side/SideBar.jsx";
import { isLogedIn } from "../../controllers/user/functions";
import { getUserSpace } from "../../controllers/spaces/functions";

function TaskManager() {
  const { setLogedIn, setCurrentSpace } = useContext(Context);

  useEffect(() => {
    if (isLogedIn()) {
      setLogedIn(true);
    } 
    else {
      setLogedIn(false);
      window.location.href = "/";
    }

    // GET paths
    const path = window.location.pathname;
    if (path.includes("/manager/space/")) {
      const spaceId = path.split("/manager/space/")[1];
      getUserSpace(spaceId).then((space) => {
        setCurrentSpace(space);
      });
    }
  }, []);

  return (
    <div className="h-screen w-full p-4 flex flex-col gap-4 bg-[#2196F3]">
      <div className="relative h-full flex justify-end">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default TaskManager;
