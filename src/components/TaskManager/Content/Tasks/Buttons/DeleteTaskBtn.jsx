import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { HiOutlineFolderRemove } from "react-icons/hi";
import { deleteTask } from "../../../../../controllers/tasks/functions";

function DeleteTaskBtn() {
  const { currentTask, setCurrentTask } = useContext(Context);

  return (
    <Button
      onClick={() =>
        deleteTask(currentTask.id).then(() => setCurrentTask(null))
      }
      color="red"
      className="w-fit flex items-center justify-center"
    >
      <HiOutlineFolderRemove className="scale-[1.7]" />
    </Button>
  );
}

export default DeleteTaskBtn;
