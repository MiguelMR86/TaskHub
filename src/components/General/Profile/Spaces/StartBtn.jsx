import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { getUserSpaces } from "../../../../controllers/spaces/functions";

function StartBtn() {
    const { openSpacesSelector, setOpenSpacesSelector, setSpaces } = useContext(Context);

    const handleOpen = () => setOpenSpacesSelector(!openSpacesSelector);
    const handelOptions = () => getUserSpaces().then((spaces) => setSpaces(spaces));
  return (
    <button
      onClick={() => {
        handleOpen();
        handelOptions();
      }}
      className="text-4xl font-bold text-[#DCDCDC] border-4 border-[#DCDCDC] rounded-lg p-4 border-dashed
           hover:text-[#c0c0c0] hover:border-[#c0c0c0] transition-all"
    >
      You haven't selected a space yet
    </button>
  );
}

export default StartBtn;
