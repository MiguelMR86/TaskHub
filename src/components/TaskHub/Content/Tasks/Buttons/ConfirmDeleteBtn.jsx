import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { deleteTask } from "../../../../../controllers/tasks/functions";

function ConfirmDeleteBtn() {
  const { currentTask, setCurrentTask, handelEditModal, handelConfirmDeleteModal } = useContext(Context);

  return (
    <Button
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
