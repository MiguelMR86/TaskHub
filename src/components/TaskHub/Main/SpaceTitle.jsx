import React, { useContext } from "react";
import { Context } from "../../../context/Context";

function SpaceTitle() {
  const { currentSpace, darkMode } = useContext(Context);
  return currentSpace ? (
    <div className={`flex justify-center items-center gap-4 ml-4 ${darkMode ? "text-white" : ""}`}>
      <h1 className="font-bold text-[23px] sm:text-4xl w-[210px] sm:w-[400px] md:w-full truncate text-ellipsis">{currentSpace.name}</h1>
    </div>
  ) : (
    <></>
  );
}

export default SpaceTitle;
