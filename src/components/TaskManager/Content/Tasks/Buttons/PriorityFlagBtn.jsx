import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { handelPriorityFlag } from "../../../../../controllers/tasks/functions";

function PriorityFlagBtn() {
  const { currentTask, handelPriorityFlagModal } = useContext(Context);
  return (
    <button
      className="absolute z-10 -top-[11.53px] right-6 w-fit rounded-xl hover:scale-110 hover:-top-[7px] transition-all duration-300"
      onClick={handelPriorityFlagModal}
    >
      <img
        className="h-30 w-11"
        src={handelPriorityFlag(currentTask.priority)}
        alt="flag-img"
      />
    </button>
  );
}

export default PriorityFlagBtn;
