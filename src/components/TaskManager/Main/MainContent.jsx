import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import SideBarBtn from "./SideBarBtn";
import SpaceTitle from "./SpaceTitle";
import StartBtn from "../Content/Spaces/Buttons/StartBtn";
import SpaceSelectorModal from "../Content/Spaces/Modals/SpaceSelectorModal";
import NavBar from "../Nav/NavBar";
import TaskList from "../Content/Tasks/TaskList";
import NewTaskModal from "../Content/Tasks/Modals/NewTaskModal";
import StartTaskBtn from "../Content/Tasks/Buttons/StartTaskBtn";
import EditTaskModal from "../Content/Tasks/Modals/EditTaskModal";

function MainContent() {
  const { currentSpace, tasks } = useContext(Context);

  return (
    <div className="w-full h-full flex flex-col gap-4 items-end bg-white p-4">
      <div className="flex w-full h-[7%]">
        <SideBarBtn />
        <SpaceTitle />
      </div>
      <div className="w-full h-[93%] flex flex-col">
        {currentSpace ? (
          <>
            {tasks.length > 0 ? (
              <>
                <NavBar />
                
                <EditTaskModal />
              </>
            ) : (
              <>
                <div className="w-full h-full p-4 grid place-items-center">
                  <StartTaskBtn />
                </div>
              </>
            )}
            <NewTaskModal />
            <TaskList />
          </>
        ) : (
          <div className="w-full h-full grid place-items-center text-center">
            <StartBtn />
            <SpaceSelectorModal />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
