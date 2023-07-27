import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Textarea } from "@material-tailwind/react";
import { updateTaskDescription } from "../../../../../controllers/tasks/functions";
function DescriptionText() {
  const { currentTask, setCurrentTask } = useContext(Context);
  return (
    <div className="w-full p-4 overflow-y-auto">
      <Textarea
        variant="static"
        label="Description"
        labelProps={{ className: "text-gray-400 text-xs" }}
        containerProps={{ className: "" }}
        id="edit-task-description"
        className="h-full border-none"
        rows={12}
        defaultValue={currentTask.description}
        onBlur={(e) => {
          if (currentTask.description !== e.target.value) {
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
