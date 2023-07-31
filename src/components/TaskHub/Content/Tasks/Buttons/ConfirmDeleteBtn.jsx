import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";

function ConfirmDeleteBtn() {
  const { currentTask, setCurrentTask, handelEditModal, handelConfirmDeleteModal, deleteTask } = useContext(Context);

  return (
    <Button
      name="confirm-delete-task-btn"
      onClick={() =>{
        deleteTask(currentTask.id).then(() => {
          handelConfirmDeleteModal()
          handelEditModal()
          setCurrentTask(null)
        })
      }}
      color="red"
      className="w-fit flex items-center justify-center"
    >
      Delete
    </Button>
  );
}

export default ConfirmDeleteBtn;
