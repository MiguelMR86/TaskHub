import React, { useContext } from "react";
import { Context } from "../../../context/Context";

function SpaceTitle() {
  const { currentSpace } = useContext(Context);
  return currentSpace ? (
    <h1 className=" font-bold text-3xl">{currentSpace.name}</h1>
  ) : (
    <></>
  );
}

export default SpaceTitle;
