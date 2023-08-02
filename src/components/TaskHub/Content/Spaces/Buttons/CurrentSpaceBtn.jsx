import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { TfiWorld } from "react-icons/tfi";

function CurrentSpaceBtn() {
  const { currentSpace, darkMode } = useContext(Context);
  return (
    <div className="relative">
      <Button
        className={`w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none border-2 border-dashed rounded-full z-10 opacity-80
          ${darkMode ? " bg-transparent text-white border-white" : " bg-white text-[#2196F3] border-[#2196F3]"}
        `}
      >
        {currentSpace ? <img src={currentSpace.url} alt={currentSpace.name} className="w-[40px] h-[40px] rounded-full" />
          : <TfiWorld className="scale-[2.3]" />}
      </Button>
    </div>
  );
}

export default CurrentSpaceBtn;
