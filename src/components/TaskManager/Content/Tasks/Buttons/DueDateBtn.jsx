import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Input } from "@material-tailwind/react";
import { handelInputDateInsert } from "../../../../../controllers/tasks/functions";
import { updateTaskDueDate } from "../../../../../controllers/tasks/functions";
function DueDateBtn() {
  const { currentTask, setCurrentTask } = useContext(Context);
  return (
    <Input
      defaultValue={handelInputDateInsert(currentTask.dueDate)}
      id="edit-task-due-date"
      label="Due Date"
      type="datetime-local"
      onBlur={(e) => {
        const date = new Date(e.target.value).getTime();
        if (currentTask.dueDate !== date) {
          updateTaskDueDate(currentTask.id, date).then(() => {
            setCurrentTask({ ...currentTask, dueDate: date });
          });
        }
      }}
    />
  );
}

export default DueDateBtn;
