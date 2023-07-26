import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import SideBarBtn from "./SideBarBtn";
import SpaceTitle from "./SpaceTitle";
import StartBtn from "../Content/Spaces/Buttons/StartBtn";
import SpaceSelectorModal from "../Content/Spaces/Modals/SpaceSelectorModal";
import NavBar from "../Nav/NavBar";
import TaskList from "../Content/Tasks/TaskList";

function MainContent() {
  const { currentSpace, currentTask } = useContext(Context);

  return (
    <div className="w-full h-full flex flex-wrap gap-4 justify-center items-end rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,.4)] p-4 border-4 border-[#DCDCDC]">
      <SideBarBtn />
      <SpaceTitle />

      <div className="w-full h-[90%] rounded-lg bg-white p-4 border-4 border-[#DCDCDC]">
        {currentSpace ? (
          <>
            <NavBar />
            <TaskList />
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center text-center">
            <StartBtn />
            <SpaceSelectorModal />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
