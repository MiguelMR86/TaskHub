import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import TaskBtn from "../Buttons/TaskBtn";
import TaskSelectorBtn from "../Buttons/TaskSelectorBtn";

function TaskSelectorModal() {
  const { handelTaskSelector, openTaskSelector, tasks } = useContext(Context);


  return (
    <Dialog
      open={openTaskSelector}
      handler={handelTaskSelector}
      size="md"
      className="w-full max-w-md"
    >
      <DialogHeader>Choose your Space</DialogHeader>

      <DialogBody divider className="overflow-y-auto h-[250px]">
        {tasks.length === 0 ? (
          <TaskSelectorBtn />
        ) : (
          <ul className="flex flex-col gap-1">
            {tasks.map((space) => (
              <TaskBtn task={task} key={space.id} handleOpen={handelTaskSelector} />
            ))}
          </ul>
        )}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="gray"
          onClick={() => handelTaskSelector(null)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default TaskSelectorModal;
