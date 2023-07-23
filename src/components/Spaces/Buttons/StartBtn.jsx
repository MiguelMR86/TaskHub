import React, { useContext } from "react";
import { Context } from "../../../context/Context";

function StartBtn() {
  const { openSpacesSelector, setOpenSpacesSelector } = useContext(Context);

  const handleOpen = () => setOpenSpacesSelector(!openSpacesSelector);

  return (
    <button
      onClick={() => {
        handleOpen();
      }}
      className="text-4xl font-bold text-[#DCDCDC] border-4 border-[#DCDCDC] rounded-lg p-4 border-dashed
           hover:text-[#c0c0c0] hover:border-[#c0c0c0] transition-all"
    >
      You haven't selected a space yet
    </button>
  );
}

export default StartBtn;
