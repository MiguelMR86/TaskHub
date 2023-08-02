import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ConfirmDeleteBtn from "../Buttons/ConfirmDeleteBtn";

function ConfirmDeleteModal() {
  const { openConfirmDelete, handelConfirmDeleteModal, currentTask } =
    useContext(Context);
  const name = currentTask ? currentTask.name : "";

  return (
    <Dialog
      size="md"
      className="w-full max-w-md"
      open={openConfirmDelete}
      handler={handelConfirmDeleteModal}
    >
      <DialogHeader className="text-center">
        <div className="flex flex-col w-full truncate text-ellipsis">
          Confirm Delete <p className="text-red-500 text-xl">{name}</p>
        </div>
      </DialogHeader>
      <DialogBody divider>
        Are you sure you want to delete this task? Once deleted, you will NOT be
        able to recover this task!
      </DialogBody>
      <DialogFooter>
        <Button
          name="cancel-delete-task-btn"
          variant="gradient"
          color="blue-gray"
          onClick={handelConfirmDeleteModal}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <ConfirmDeleteBtn />
      </DialogFooter>
    </Dialog>
  );
}
export default ConfirmDeleteModal;
