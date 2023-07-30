import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Textarea, Typography } from "@material-tailwind/react";

function DescriptionText() {
  const { currentTask, setCurrentTask, updateTaskDescription } = useContext(Context);
  const description = currentTask ? currentTask.description : "";

  return (
    <div className="w-full md:w-1/2 py-4 pl-4">
      <Typography className="text-sm font-semibold text-gray-500 mb-1">
        Task Description
      </Typography>
      
      <Textarea
        variant="static"
        labelProps={{ className: "hidden" }}
        id="edit-task-description"
        className="h-full border-none"
        rows={10}
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
