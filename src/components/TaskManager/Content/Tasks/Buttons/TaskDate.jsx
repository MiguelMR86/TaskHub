import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { handelDates } from "../../../../../controllers/tasks/functions";
import { Typography } from "@material-tailwind/react";

function TaskDate() {
  const { currentTask } = useContext(Context);

  return (
    <div>
      <Typography className="text-xs font-normal text-gray-400">
        Creation Date
      </Typography>
      <Typography variant="small" color="gray" className="c">
        {handelDates(currentTask.date)}
      </Typography>
    </div>
  );
}

export default TaskDate;
