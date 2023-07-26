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

  return (
    <Dialog size="lg" open={openConfirmDelete} handler={handelConfirmDeleteModal}>
      <DialogHeader>Confirm Delete -<p className="text-red-500 ml-2">{currentTask.name}</p></DialogHeader>
      <DialogBody divider>
        Are you sure you want to delete this task? Once deleted, you
        will NOT be able to recover this task!
      </DialogBody>
      <DialogFooter>
      <Button
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
