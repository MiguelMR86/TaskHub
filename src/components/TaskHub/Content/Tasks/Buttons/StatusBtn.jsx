import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";

function StatusBtn() {
  const { currentTask, openStatus, handelStatusModal, handelStatusColor } = useContext(Context);
  const props = currentTask ? handelStatusColor(currentTask.status) : ["", ""];
  
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
      name="status-button"
      onClick={() => {
        handelStatusModal();
        handelStatusModalDelay();
      }}
      className={`${props[1]} text-white`}
    >
      {currentTask ? currentTask.status : ""}
    </Button>
  );
}

export default StatusBtn;
