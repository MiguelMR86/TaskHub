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
    <div className={`w-full h-full flex gap-4 items-end bg-white p-4 ${currentSpace ? "flex-col" : "flex-wrap"}`}>
      <div className="flex w-full">
        <SideBarBtn />
        <SpaceTitle />
      </div>
      <div className="w-full h-[100%] flex flex-col">
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
