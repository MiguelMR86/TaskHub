import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";

function TaskListBtn({ task, index }) {
  const { 
    setCurrentTask, handelEditModal, handelDates, handelPriorityColor,
    handleDragStart, handleDragOver, handleDrop
  } = useContext(Context);

  const priorityColor = handelPriorityColor(task.priority);
  const dueDate = task.dueDate == 0 ? "There is no Due Date yet" : handelDates(task.dueDate);
  const deadline = task.dueDate < Date.now()
        ? task.status == "Done"
          ? task.dueDate < task.lastEdit ? "border-red-500 border-2 text-red-500" : "border-green-500 border-2 text-green-500"
          : "border-red-500 border-2 text-red-500"
        : task.status == "Done" ? "border-green-500 border-2 text-green-500" : "";
  
  return (
    <div
    key={task.id}
    color="white"
    className={`z-10 bg-white w-full min-h-[50px] border border-gray-400 grid place-items-center hover:bg-gray-100 rounded-md shadow-md hover:shadow-lg ${deadline}`}
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
        className='w-full h-full pl-4 flex justify-between items-center'
      >
        <p className=" w-[150px] sm:w-2/3 text-left font-semibold truncate">
          {task.name}
        </p>
        <p className={`text-xs grid place-items-center w-[100px] h-full sm:w-[125px] md:w-[150px] text-white p-2 rounded-[4.7px] shadow-2xl ${priorityColor}`}>
          {dueDate}
        </p>
      </button>
    </div>
  );
}

export default TaskListBtn;
