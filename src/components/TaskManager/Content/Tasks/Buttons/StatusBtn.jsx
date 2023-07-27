import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { handelStatusColor } from "../../../../../controllers/tasks/functions";

function StatusBtn() {
  const { currentTask } = useContext(Context);
  const color = handelStatusColor(currentTask.status);

  return (
    <Button color={color[0]} className={color[1]}>
      {currentTask.status}
    </Button>
  );
}

export default StatusBtn;
