import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { createTask } from "../../../../../controllers/tasks/functions";
import { getUserTasks } from "../../../../../controllers/tasks/functions";

function NewTaskModal() {
  const { openCreateTask, setOpenCreateTask, currentSpace } = useContext(Context);

  const handleOpen = () => setOpenCreateTask(!openCreateTask);

  const handleCreateTask = (e) => {
    e.preventDefault();
    const spaceId = currentSpace.id;
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("task-due-date").value;
    const dueTime = document.getElementById("task-due-time").value;
    const priority = document.getElementById("task-priority").querySelector('span').innerText;    
    const task = { spaceId, name, description, dueDate, dueTime, priority, };
    createTask(task)
    handleOpen();
    };

  return (
    <Dialog
      open={openCreateTask}
      handler={handleOpen}
      size="md"
      className="w-full max-w-md"
    >
      <DialogHeader>Create a new Task</DialogHeader>
      <form
      onSubmit={handleCreateTask}
      >
        <DialogBody divider className="flex flex-col gap-3">
          <Input id="task-name" size="lg" label="Task Name" required />
          <div className="flex flexw gap-3">
            <Input id="task-due-date" size="lg" label="Due Date" type="date" />
            <Input id="task-due-time" size="lg" label="Due Time" type="time" />
          </div>
          <Select id="task-priority" size="lg" label="Priority">
            <Option value="low" className="bg-cyan-400 text-white mb-1">
              Low
            </Option>
            <Option value="medium" className=" bg-yellow-600 text-white mb-1">
              Medium
            </Option>
            <Option value="high" className="bg-red-600 text-white mb-1">
              High
            </Option>
          </Select>
          <Textarea id="task-description" label="Description" required />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="blue-gray"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="blue" type="submit">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
}

export default NewTaskModal;
