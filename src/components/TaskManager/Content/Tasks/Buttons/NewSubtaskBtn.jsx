import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Input } from "@material-tailwind/react";
import { updateTaskSubtasks } from "../../../../../controllers/tasks/functions";

function NewSubtaskBtn() {
  const { currentTask, setCurrentTask } = useContext(Context);
  const subtasks = currentTask.subtasks;

  return (
    <Input
      id="edit-task-title"
      variant="static"
      containerProps={{
        className: "h-[30px] mt-4",
      }}
      placeholder="Type here to add a subtask ..."
      className="p-0 text-xs border-none w-fit text-gray-400"
      onChange={(e) => {
        if (e.target.value.length > 50)
          e.target.value = e.target.value.slice(0, 50);
      }}
      onBlur={(e) => {
        if (e.target.value.trim() === "" || e.target.value.length === 0) return;
        if (currentTask && subtasks) {
          const newSubtask = { name: e.target.value, done: false };
          const exists = subtasks.some((subtask) => subtask.name === newSubtask.name);

          if (!exists) {
            const newSubtasks = [...subtasks, newSubtask];
            updateTaskSubtasks(currentTask.id, newSubtasks).then(() => {
              setCurrentTask({ ...currentTask, subtasks: newSubtasks });
            });
          }
        }
        e.target.value = "";
      }}
    />
  );
}

export default NewSubtaskBtn;
