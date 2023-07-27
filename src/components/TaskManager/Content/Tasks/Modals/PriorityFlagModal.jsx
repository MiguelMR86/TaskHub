import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { updateTaskPriority } from "../../../../../controllers/tasks/functions";

function PriorityFlagModal() {
  const {
    currentTask,
    setCurrentTask,
    openPriorityFlag,
    handelPriorityFlagModal,
  } = useContext(Context);

  return (
    <Dialog size="lg" open={openPriorityFlag} handler={handelPriorityFlagModal}>
      <DialogHeader>Change Priority</DialogHeader>
      <DialogBody divider>
        <Select id="task-priority-flag" size="lg" label="Priority">
          <Option value="None" className="bg-gray-400 text-white mb-1">
            None
          </Option>
          <Option value="Low" className="bg-cyan-400 text-white mb-1">
            Low
          </Option>
          <Option value="Medium" className=" bg-yellow-600 text-white mb-1">
            Medium
          </Option>
          <Option value="High" className="bg-red-600 text-white mb-1">
            High
          </Option>
        </Select>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          color="blue-gray"
          onClick={handelPriorityFlagModal}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          onClick={() => {
            const priority = document
              .getElementById("task-priority-flag")
              .querySelector("span").innerText;
            if (currentTask.priority !== priority) {
              if (priority.length === 0) return;
              updateTaskPriority(currentTask.id, priority).then(() => {
                setCurrentTask({ ...currentTask, priority: priority });
                handelPriorityFlagModal();
              });
            }
          }}
        >
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
export default PriorityFlagModal;
