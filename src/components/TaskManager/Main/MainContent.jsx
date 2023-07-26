import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import SideBarBtn from "./SideBarBtn";
import SpaceTitle from "./SpaceTitle";
import StartBtn from "../Content/Spaces/Buttons/StartBtn";
import SpaceSelectorModal from "../Content/Spaces/Modals/SpaceSelectorModal";
import NavBar from "../Nav/NavBar";
import TaskList from "../Content/Tasks/TaskList";

function MainContent() {
  const { currentSpace } = useContext(Context);

  return (
    <div className={`w-full h-full flex gap-4 items-end rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,.4)] p-4 border-4 border-[#DCDCDC] ${currentSpace ? "flex-col" : "flex-wrap"}`}>
      <SideBarBtn />
      <SpaceTitle />

      <div className="w-full h-[100%] flex flex-col rounded-lg p-4 border-4 border-[#DCDCDC]">
        {currentSpace ? (
          <>
            <NavBar />
            <div className="flex gap-4 h-full">
              <TaskList />
            </div>
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
