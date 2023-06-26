import React, { useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import NavBar from "./Nav/NavBar";
import MainContent from "./Main/MainContent";
import SideBarBtn from "./Side/SideBarBtn";
import SideBar from "./Side/SideBar.jsx";
import { auth } from "../../config/firebase";
import { isLogedIn } from "../../controllers/user/functions";

function TaskManager() {
  const { setLogedIn } = useContext(Context);

  useEffect(() => {
    if (isLogedIn()) {
      setLogedIn(true);
    }
    else {
      setLogedIn(false);
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="h-screen w-full p-4 flex flex-col gap-4 bg-[#2196F3]">
      <NavBar />
      <div className="relative h-full flex justify-end">
        <SideBarBtn />
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default TaskManager;
