import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { handelDates } from "../../../../../controllers/tasks/functions";
import { Typography } from "@material-tailwind/react";

function LastEdit() {
  const { currentTask } = useContext(Context);

  return (
    <div>
        <>
          <Typography className="text-xs font-normal text-gray-400">
            Last update
          </Typography>
          <Typography variant="small" color="gray" className="text-xs w-fit">
            {currentTask && currentTask.lastEdit != 0 ? `${handelDates(currentTask.lastEdit)}` : ''}
          </Typography>
        </>
    </div>
  );
}

export default LastEdit;
