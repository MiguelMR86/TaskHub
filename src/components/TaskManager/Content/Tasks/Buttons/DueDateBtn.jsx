import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Input } from "@material-tailwind/react";
import { handelInputDateInsert } from "../../../../../controllers/tasks/functions";
import { updateTaskDueDate } from "../../../../../controllers/tasks/functions";
function DueDateBtn() {
  const { currentTask, setCurrentTask } = useContext(Context);
  const dueDate = handelInputDateInsert(currentTask.dueDate)
  const deadline = currentTask.dueDate

  return (
    <Input
      label="Due Date"
      labelProps={{ className: (deadline < Date.now()) ? "text-red-500" : "text-gray-400" }}
      containerProps={{ className: "min-w-[150px]" }}
      className={(deadline < Date.now()) ? "text-red-500" : ""}
      defaultValue={dueDate}
      id="edit-task-due-date"
      type="datetime-local"
      onBlur={(e) => {
        const date = new Date(e.target.value).getTime();
        if (currentTask.dueDate !== date) {
          updateTaskDueDate(currentTask.id, date).then(() => {
            setCurrentTask({ ...currentTask, dueDate: date });
          });
        }

        if (Date.parse(e.target.value) < Date.now()) {
          document.getElementById("edit-task-due-date").value = "";
        }
      }}
    />

  );
}

export default DueDateBtn;
