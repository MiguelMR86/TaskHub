import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { handelPriorityFlag } from "../../../../../controllers/tasks/functions";

function PriorityFlagBtn() {
  const { currentTask, handelPriorityFlagModal } = useContext(Context);
  return (
    <button
      className="absolute -top-2 right-6 w-fit rounded-xl hover:scale-110 hover:-top-1 transition-all duration-300"
      onClick={handelPriorityFlagModal}
    >
      <img
        className="h-20 w-10"
        src={handelPriorityFlag(currentTask.priority)}
        alt="flag-img"
      />
    </button>
  );
}

export default PriorityFlagBtn;
