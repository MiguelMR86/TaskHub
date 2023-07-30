import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { Typography } from "@material-tailwind/react";
import SubtaskBtn from "./Buttons/SubtaskBtn";
import NewSubtaskBtn from "./Buttons/NewSubtaskBtn";

function SubtaskList() {
  const { currentTask } = useContext(Context);
  const subtasks = currentTask ? currentTask.subtasks : null;

  return (
    <div className="relative w-full md:w-1/2 p-4 h-full border-t md:border-t-0 md:border-l">
      <Typography className="text-sm font-semibold text-gray-500 mb-4">
        Subtasks
      </Typography>

      <div>
        {subtasks ? (
          subtasks.map((subtask) => (
            <SubtaskBtn key={subtask.name} subtask={subtask} />
          ))
        ) : (
          <></>
        )}
        <NewSubtaskBtn />
      </div>
    </div>
  );
}

export default SubtaskList;
