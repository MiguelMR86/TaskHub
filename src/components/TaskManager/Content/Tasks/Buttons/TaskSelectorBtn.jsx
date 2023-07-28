import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { HiOutlineFolderAdd } from "react-icons/hi";

function TaskSelectorBtn() {
  const { handleSpaceSelectorModals } = useContext(Context);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p>You don't have any tasks</p>
      <p className="mb-8">Let's create one!</p>
      <button
        onClick={handleSpaceSelectorModals}
        className="text-2xl font-bold text-[#DCDCDC] border-4 border-[#DCDCDC] rounded-lg p-4 border-dashed hover:text-[#c0c0c0] hover:border-[#c0c0c0] transition-all"
      >
        <HiOutlineFolderAdd className="scale-[2]" />
      </button>
    </div>
  );
}

export default TaskSelectorBtn;
