import React, { useContext, useEffect } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { handelPriority } from "../../../../../controllers/tasks/functions";
function TaskListBtn({ task }) {
  const { setCurrentTask } = useContext(Context);

  return (
    <Button
      key={task.id}
      className="relative flex justify-end items-center border-4 text-white  bg-green-400 border-green-200"
      onClick={() => {
        setCurrentTask(task);
      }}
    >
      <div
        className={`absolute h-[120%] w-[120px] -top-1 -left-1 rounded-l-lg border-l-4 border-y-4 grid place-items-center
        ${handelPriority(task.priority)}
      `}
      >
          <p>{task.name}</p>
      </div>
      <p className="hover:text-gray-400">{task.status}</p>
    </Button>
  );
}

export default TaskListBtn;
