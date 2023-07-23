import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import SideBarBtn from "./SideBarBtn";
import SpaceTitle from "./SpaceTitle";
import StartBtn from "../../General/Profile/Spaces/Buttons/StartBtn";
import ChooseSpaceModal from "../../General/Profile/Spaces/Modals/ChooseSpaceModal";

function MainContent() {
  const { currentSpace } = useContext(Context);
  return (
    <div className="w-full h-full flex flex-wrap gap-4 justify-center items-end rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,.4)] p-4 border-4 border-[#DCDCDC]">
      <SideBarBtn />
      <SpaceTitle />
      <div className="w-full h-[90%] flex justify-center items-center text-center rounded-lg bg-white p-4 border-4 border-[#DCDCDC]">
        {currentSpace ? (
         <></> 
        ):(
          <>
            <StartBtn />
            <ChooseSpaceModal />
          </>
        )}
      </div>
    </div>
  );
}

export default MainContent;
