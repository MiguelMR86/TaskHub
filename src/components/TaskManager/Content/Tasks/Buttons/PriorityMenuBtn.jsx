import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  handelPriorityColor,
  updateTaskPriority,
} from "../../../../../controllers/tasks/functions";

function PriorityMenuBtn({ name }) {
  const { currentTask, setCurrentTask, handelPriorityModal } = useContext(Context);
  const color = handelPriorityColor(name);

  return (
    <button
      onClick={() => {
        if (currentTask && currentTask.priority !== name) {
          updateTaskPriority(currentTask.id, name).then(() => {
            setCurrentTask({ ...currentTask, priority: name });
            handelPriorityModal();
          });
        }
      }}
      className={`flex justify-between ${color} items-center gap-4 text-white p-2 rounded-md text-sm border border-blue-gray-100 transition-all duration-300 hover:shadow-lg`}
    >
      {name}
    </button>
  );
}

export default PriorityMenuBtn;
