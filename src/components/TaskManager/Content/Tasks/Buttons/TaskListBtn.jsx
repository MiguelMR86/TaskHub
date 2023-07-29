import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  handelStatusColor,
  handelPriorityColor,
} from "../../../../../controllers/tasks/functions";
import { handelDates } from "../../../../../controllers/tasks/functions";

function TaskListBtn({ task }) {
  const { setCurrentTask, handelEditModal } = useContext(Context);
  const statusColor = handelStatusColor(task.status);
  const priorityColor = handelPriorityColor(task.priority);
  const deadline = task.dueDate > 0 && task.dueDate < Date.now() ? "text-red-500" : "";
  const deadlineBorder = task.dueDate > 0 && task.dueDate < Date.now() ? "border-red-500 border" : "";
  const dueDate = task.dueDate == 0 ? "There is no Due Date yet" : handelDates(task.dueDate);

  return (
    <div
      key={task.id}
      color="white"
      className={`relative w-full min-h-[50px] mt-8 border border-gray-300 grid place-items-center hover:bg-gray-100 rounded-md hover:shadow-lg ${deadlineBorder}`}
    >
      <div
        className={`absolute h-[25px] w-[70px] -top-[25px] left-1 text-[11px] text-white rounded-t-md grid place-items-center ${statusColor[1]} ${deadlineBorder}`}
      >
        <p>{task.status}</p>
      </div>

      <button
        onClick={() => {
          setCurrentTask(task);
          handelEditModal();
        }}
        className={`w-full h-full px-4 flex justify-between items-center ${deadline}`}
      >
        <p className="min-w-[149px] text-left truncate">{task.name}</p>
        <div className="flex items-center justify-between h-full max-w-[250px] gap-2 sm:gap-4">
          <div
            className={`${priorityColor} text-xs min-w-[70px] h-[30px] rounded-full grid place-items-center text-white`}
          >
            <p>{task.priority}</p>
          </div>
          <p className={`text-xs text-gray-500 min-w-[50px] ${deadline}`}>{dueDate}</p>
        </div>
      </button>
    </div>
  );
}

export default TaskListBtn;
