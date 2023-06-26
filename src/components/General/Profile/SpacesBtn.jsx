import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { Button } from "@material-tailwind/react";
import { TfiWorld } from "react-icons/tfi";
import NewSpaceBtn from "./Spaces/NewSpaceBtn";
import YourSpacesBtn from "./Spaces/YourSpacesBtn";
function SpacesBtn() {
  const { openSpacesMenu, setOpenSpacesMenu } = useContext(Context);
  return (
    <div className="relative">
      <Button
        onClick={() => setOpenSpacesMenu(!openSpacesMenu)}
        className="w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none bg-white text-[#2196F3] border-2 border-[#2196F3] border-dashed rounded-full z-10 opacity-80"
      >
        <TfiWorld className="scale-[2.3]" />
      </Button>
      <div
        className={`absolute top-[-150px] w-[200px] p-4 border-2 border-[#DCDCDC] bg-white text-black rounded-lg shadow-[0_5px_25px_rgba(0,0,0,0.1)] ${
          openSpacesMenu ? "" : "hidden"
        }`}
      >
        <YourSpacesBtn />
        <NewSpaceBtn />
      </div>
    </div>
  );
}

export default SpacesBtn;
