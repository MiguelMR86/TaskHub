import React, { useContext } from "react";
import { Context } from "../../../context/Context";

function SpaceTitle() {
  const { currentSpace } = useContext(Context);
  return currentSpace ? (
    <div className="flex justify-center items-center gap-4 ml-4">
      <h1 className="font-bold text-[23px] sm:text-4xl w-[210px] sm:w-[400px] md:w-full truncate text-ellipsis">{currentSpace.name}</h1>
      <img
        className=" absolute top-5 right-5 w-[50px] h-[50px] rounded-full hover:scale-125 transition duration-300 ease-in-out"
        src={currentSpace.url}
        alt={currentSpace.name + "-img"}
      />
    </div>
  ) : (
    <></>
  );
}

export default SpaceTitle;
