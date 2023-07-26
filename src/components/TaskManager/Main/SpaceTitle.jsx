import React, { useContext } from "react";
import { Context } from "../../../context/Context";

function SpaceTitle() {
  const { currentSpace } = useContext(Context);
  return currentSpace ? (
    <div className="flex justify-center items-center gap-4 text-center w-full h-[60px] pl-16 sm:p-0 ">
      <h1 className=" font-bold text-2xl">{currentSpace.name}</h1>
      <img
        className="w-[40px] h-[40px] rounded-full shadow-[0_5px_15px_rgba(0,0,0,.4)] hover:shadow-[0_5px_15px_rgba(0,0,0,.8)] hover:scale-125 transition duration-300 ease-in-out"
        src={currentSpace.url}
        alt={currentSpace.name + "-img"}
      />
    </div>
  ) : (
    <></>
  );
}

export default SpaceTitle;
