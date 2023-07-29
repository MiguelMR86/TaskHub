import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { handelDates } from "../../../../../controllers/tasks/functions";
import { Typography } from "@material-tailwind/react";

function TaskDate() {
  const { currentTask } = useContext(Context);

  return (
    <div>
      <Typography className="text-xs font-normal text-gray-400">
        Created on
      </Typography>
      <Typography variant="small" color="gray" className="text-xs w-fit">
      {currentTask && currentTask.lastEdit != 0 ? `${handelDates(currentTask.date)}` : ''}
      </Typography>
    </div>
  );
}

export default TaskDate;
