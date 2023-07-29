import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Textarea, Typography } from "@material-tailwind/react";
import { updateTaskDescription } from "../../../../../controllers/tasks/functions";

function DescriptionText() {
  const { currentTask, setCurrentTask } = useContext(Context);
  const description = currentTask ? currentTask.description : "";

  return (
    <div className="w-full p-4">
      <Typography
      className="text-xs font-normal text-gray-400 mb-1">Task Description</Typography>
      
      <Textarea
        variant="static"
        labelProps={{ className: "hidden" }}
        id="edit-task-description"
        className="h-full border-none"
        rows={12}
        defaultValue={description}
        onBlur={(e) => {
          if (currentTask && currentTask.description !== e.target.value) {
            updateTaskDescription(currentTask.id, e.target.value).then(() => {
              setCurrentTask({ ...currentTask, description: e.target.value });
            });
          }
        }}
      ></Textarea>
    </div>
  );
}

export default DescriptionText;
