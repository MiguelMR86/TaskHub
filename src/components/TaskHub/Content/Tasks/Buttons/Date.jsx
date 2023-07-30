import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { handelDates } from "../../../../../controllers/tasks/functions";
import { Typography } from "@material-tailwind/react";

function Date() {
  const { currentTask } = useContext(Context);

  return (
    <div>
      <Typography className="text-xs font-normal text-gray-400">
        Created on
      </Typography>
      <Typography variant="small" color="gray" className="text-xs w-fit">
      {currentTask && currentTask.date != 0 ? `${handelDates(currentTask.date)}` : ''}
      </Typography>
    </div>
  );
}

export default Date;
