import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { handelStatusColor } from "../../../../../controllers/tasks/functions";

function StatusBtn() {
  const { currentTask, openStatus, handelStatusModal } = useContext(Context);
  const props = handelStatusColor(currentTask.status);
  // when open status is closed make a dilay of 0,3 seconds to close the modal
  const handelStatusModalDelay = () => {
    if (!openStatus) {
      document.getElementById("status-menu").classList.remove("hidden");
    } else {
      setTimeout(() => {
        document.getElementById("status-menu").classList.add("hidden");
      }, 300);
    }
  };

  return (
    <Button
      onClick={() => {
        handelStatusModal();
        handelStatusModalDelay();
      }}
      color={props[0]}
      className={`${props[1]} text-white`}
    >
      {currentTask ? currentTask.status : ""}
    </Button>
  );
}

export default StatusBtn;
