import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { MenuItem } from "@material-tailwind/react";

function TaskBtn({ task }) {
  const { setCurrentTask, handelTasksMenu, currentSpace } = useContext(Context);

  return (
    <MenuItem
    className="text-blue-gray-500 border hover:bg-blue-gray-100 h-12"
    key={task.id}
      onClick={() => {
        setCurrentTask(task);
        handelTasksMenu();
      }}
    >
        <p>{task.name}</p>
    </MenuItem>
  );
}

export default TaskBtn;
