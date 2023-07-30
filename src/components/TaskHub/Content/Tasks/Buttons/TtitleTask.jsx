import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Input } from "@material-tailwind/react";

function TtitleTask() {
  const { currentTask, setCurrentTask, updateTaskName } = useContext(Context);
  const title = currentTask ? currentTask.name : "";

  return (
    <Input
      id="edit-task-title"
      containerProps={{ className: "max-w-[210px]" }}
      variant="static"
      className="text-xl p-0 border-none"
      defaultValue={title}
      onBlur={(e) => {
        if (currentTask && currentTask.name !== e.target.value) {
          updateTaskName(currentTask.id, e.target.value).then(() => {
            setCurrentTask({ ...currentTask, name: e.target.value });
          });
        }
      }}
    />
  );
}

export default TtitleTask;
