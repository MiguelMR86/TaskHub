import React, { useContext, useEffect } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { handelPriorityColor } from "../../../../../controllers/tasks/functions";
import { handelStatusColor } from "../../../../../controllers/tasks/functions";

function TaskListBtn({ task }) {
  
  const { setCurrentTask, handelEditModal } = useContext(Context);
  const props = handelStatusColor(task.status);
  
  return (
    <Button
      key={task.id}
      color={props[0]}
      className={`relative rounded-xl flex justify-end items-center border-4 text-white ${props[1]}`}
      onClick={() => {
        setCurrentTask(task);
        handelEditModal();
      }}
    >
      <div
        className={`absolute h-full w-[120px] top-0 left-0 rounded-l-lg grid place-items-center
        ${handelPriorityColor(task.priority)}
      `}
      >
          <p>{task.name}</p>
      </div>
      <p className="hover:text-gray-400">{task.status}</p>
    </Button>
  );
}

export default TaskListBtn;
