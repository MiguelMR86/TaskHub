import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";

function TaskListBtn({ task, index }) {
  const { 
    setCurrentTask, handelEditModal, handelDates, handelPriorityColor,
    handleDragStart, handleDragOver, handleDrop
  } = useContext(Context);

  const priorityColor = handelPriorityColor(task.priority);
  const deadline = task.dueDate > 0 && task.dueDate < Date.now() ? "text-red-500" : "";
  const deadlineBorder = task.dueDate > 0 && task.dueDate < Date.now() ? "border-red-500 border" : "";
  const dueDate = task.dueDate == 0 ? "There is no Due Date yet" : handelDates(task.dueDate);

  return (
    <div
    key={task.id}
    color="white"
    className={`z-10 bg-white w-full min-h-[50px] border border-gray-400 grid place-items-center hover:bg-gray-100 rounded-md shadow-md hover:shadow-lg ${deadlineBorder}`}
    draggable
    onDragStart={(e) => handleDragStart(e, index)}
    onDragOver={(e) => handleDragOver(e, task.status)}
    onDrop={(e) => handleDrop(e, task.status)}
    >
      <button
        name="task-list-btn"
        onClick={() => {
          setCurrentTask(task);
          handelEditModal();
        }}
        className={`w-full h-full px-4 flex justify-between items-center ${deadline}`}
      >
        <p className="w-[100px]  sm:w-[300px] md:w-[500px] lg:w-[700px] text-left truncate">{task.name}</p>
        <div className="flex items-center justify-between h-full max-w-[250px] gap-2 sm:gap-4">
          <div
            className={`${priorityColor} text-xs min-w-[70px] h-[30px] rounded-full grid place-items-center text-white`}
          >
            <p>{task.priority}</p>
          </div>
          <p className={`text-xs text-gray-600 min-w-[50px] ${deadline}`}>
            {dueDate}
          </p>
        </div>
      </button>
    </div>
  );
}

export default TaskListBtn;
