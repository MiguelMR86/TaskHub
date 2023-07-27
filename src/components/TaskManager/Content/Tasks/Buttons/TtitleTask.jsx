import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Input } from "@material-tailwind/react";
import { updateTaskName } from "../../../../../controllers/tasks/functions";

function TtitleTask() {
  const { currentTask, setCurrentTask } = useContext(Context);
  return (
    <Input
      id="edit-task-title"
      containerProps={{ className: "max-w-[210px]" }}
      variant="static"
      className="text-xl p-0 border-none"
      defaultValue={currentTask.name}
      // prevent focus on load
      onChange={(e) => {
        if (e.target.value.length > 15)
          e.target.value = e.target.value.slice(0, 15);
      }}
      onBlur={(e) => {
        if (currentTask.name !== e.target.value) {
          updateTaskName(currentTask.id, e.target.value).then(() => {
            setCurrentTask({ ...currentTask, name: e.target.value });
          });
        }
      }}
    />
  );
}

export default TtitleTask;
