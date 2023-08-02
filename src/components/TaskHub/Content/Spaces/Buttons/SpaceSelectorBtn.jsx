import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { BsHouseAdd } from "react-icons/bs";

function SpaceSelectorBtn() {
  const {
    openCreateSpace,
    setOpenCreateSpace,
    openSpaceSelector,
    setOpenSpaceSelector,
  } = useContext(Context);

  const handleModals = () => {
    setOpenSpaceSelector(!openSpaceSelector);
    setOpenCreateSpace(!openCreateSpace);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p>You don't have any space yet</p>
      <p className="mb-8">Let's create one!</p>
      <button
        name="new-space-button"
        onClick={handleModals}
        className="text-2xl font-bold text-[#DCDCDC] border-4 border-[#DCDCDC] rounded-lg p-4 border-dashed hover:text-[#c0c0c0] hover:border-[#c0c0c0] transition-all"
      >
        <BsHouseAdd className="scale-[2]" />
      </button>
    </div>
  );
}

export default SpaceSelectorBtn;
