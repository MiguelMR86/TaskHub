import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import SideBarBtn from "./SideBarBtn";
import StartBtn from "../Content/Spaces/Buttons/StartBtn";
import SpaceSelectorModal from "../Content/Spaces/Modals/SpaceSelectorModal";

function MainContent() {
  const { currentSpace } = useContext(Context);

  return (
    <div className="w-full h-full flex flex-col gap-4 items-end bg-white p-4">
      <div className="flex w-full h-[7%]">
        <SideBarBtn />
      </div>
      <div className="w-full h-[93%] flex flex-col">
        {!currentSpace ? (
          
          <div className="w-full h-full grid place-items-center text-center">
            <StartBtn />
            <SpaceSelectorModal />
          </div>
  
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MainContent;
