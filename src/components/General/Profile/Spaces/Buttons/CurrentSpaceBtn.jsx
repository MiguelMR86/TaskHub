import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { TfiWorld } from "react-icons/tfi";

function CurrentSpaceBtn() {
  const { currentSpace } = useContext(Context);
  return (
    <div className="relative">
      <Button
        className="w-[50px] h-[50px] p-0 m-0 flex justify-center items-center select-none bg-white text-[#2196F3] border-2 border-[#2196F3] border-dashed rounded-full z-10 opacity-80"
      >
        {currentSpace ? <img src={currentSpace.url} alt={currentSpace.name} className="w-[40px] h-[40px] rounded-full" />
          : <TfiWorld className="scale-[2.3]" />}
      </Button>
    </div>
  );
}

export default CurrentSpaceBtn;
