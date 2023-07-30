import React, { useContext, useEffect } from "react";
import { Context } from "../../../../../context/Context";
import { Typography, Checkbox } from "@material-tailwind/react";
import {AiOutlineDelete} from "react-icons/ai";

function SubtaskBtn({ subtask }) {
  const { currentTask, setCurrentTask, updateTaskSubtasks } = useContext(Context);
  const status = subtask.done ? true : false;
  const name = subtask.name;
  const checkid = `edit-subtask` + name;

  useEffect(() => {
    document.getElementById(checkid).checked = status;
  }, []);

  return (
    <div className="flex items-center justify-between">
      <Checkbox
        id={checkid}
        color="blue"
        label={
          <Typography
            className={`text-sm w-fit ${
              status ? "line-through text-gray-400" : ""
            }`}
          >
            {name}
          </Typography>
        }
        onClick={() => {
          const newSubtasks = currentTask.subtasks.map((sub) => {
            if (sub.name === name) {
              sub.done = !status;
            }
            return sub;
          });
          updateTaskSubtasks(currentTask.id, newSubtasks).then(() => {
            setCurrentTask({ ...currentTask, subtasks: newSubtasks });
          });
        }}
      />
      <button
        className="scale-[1.2] text-gray-500 rounded-full p-1 border border-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all"
        onClick={() => {
          const newSubtasks = currentTask.subtasks.filter((sub) => sub.name !== name );
          updateTaskSubtasks(currentTask.id, newSubtasks).then(() => {
            setCurrentTask({ ...currentTask, subtasks: newSubtasks });
          });
        }}
        >
          <AiOutlineDelete />
        </button>
    </div>
  );
}

export default SubtaskBtn;
