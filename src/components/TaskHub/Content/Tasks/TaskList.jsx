import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import TaskListBtn from "./Buttons/TaskListBtn";
import NavBar from "../../Nav/NavBar";

function TaskList() {
  const {
    currentSpace,
    currentTask,
    tasks,
    handelGetTasks,
    dragOverStatus,
    handleDragOver,
    handleDrop
  } = useContext(Context);

  useEffect(() => {
    handelGetTasks();
  }, [currentSpace, currentTask]);

  return (
    <div className="relative flex flex-col gap-5 p-4 h-full w-full border-4 border-[#DCDCDC] rounded-lg overflow-hidden overflow-y-auto">
      <NavBar />
      <div
        id="drop-todo"
        className={`w-full min-h-[150px] h-full bg-lime-400 rounded-md p-4 overflow-y-auto task-item  ${
          dragOverStatus === "To Do" ? "dragging-over" : ""
        }`}
        onDragOver={(e) => handleDragOver(e, "To Do")}
        onDrop={(e) => handleDrop(e, "To Do")}
      >
        <h2 className="text-xl">To Do</h2>
        <div className=" flex flex-col gap-2 mt-1">
          {tasks.map((task, index) => {
            if (task.status === "To Do") {
              return <TaskListBtn task={task} key={task.id} index={index} />;
            }
          })}
        </div>
      </div>
      <div
        id="drop-in-progress"
        className={`w-full min-h-[150px] h-full bg-teal-300 rounded-md p-4 overflow-y-auto task-item  ${
          dragOverStatus === "In Progress" ? "dragging-over" : ""
        }`}
        onDragOver={(e) => handleDragOver(e, "In Progress")}
        onDrop={(e) => handleDrop(e, "In Progress")}
      >
        <h2 className="text-xl">In Progress</h2>
        <div className=" flex flex-col gap-2 mt-1">
          {tasks.map((task, index) => {
            if (task.status === "In Progress") {
              return <TaskListBtn task={task} key={task.id} index={index} />;
            }
          })}
        </div>
      </div>
      <div
        id="drop-done"
        className={`w-full min-h-[150px] h-full bg-green-400 rounded-md p-4 overflow-y-auto task-item  ${
          dragOverStatus === "Done" ? "dragging-over" : ""
        }`}
        onDragOver={(e) => handleDragOver(e, "Done")}
        onDrop={(e) => handleDrop(e, "Done")}
      >
        <h2 className="text-xl">Done</h2>
        <div className=" flex flex-col gap-2 mt-1">
          {tasks.map((task, index) => {
            if (task.status === "Done") {
              return <TaskListBtn task={task} key={task.id} index={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
