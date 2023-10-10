import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Input } from "@material-tailwind/react";

function DueDateBtn() {
  const { currentTask, handelInputDateInsert, handleUpdateDueDate } = useContext(Context);
  const dueDate = currentTask && currentTask.dueDate ? handelInputDateInsert(currentTask.dueDate) : ""
  const deadline = currentTask && currentTask.dueDate >= 0 && currentTask.dueDate < Date.now() ? "text-red-500" : "text-gray-400";

  return (
    <Input
      name="due-date-input"
      label="Due Date"
      labelProps={{ className: deadline}}
      containerProps={{ className: "min-w-[150px]" }}
      className={deadline}
      defaultValue={dueDate}
      id="edit-task-due-date"
      type="datetime-local"
      onBlur={(e) => handleUpdateDueDate(e.target.value)}
    />

  );
}

export default DueDateBtn;
