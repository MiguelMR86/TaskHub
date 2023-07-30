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

function NewTaskModal() {
  const { openCreateTask, handleCreateTaskModal, handelGetTasks, currentSpace, createTask } = useContext(Context);

  const handleCreateTask = (e) => {
    e.preventDefault();
    const spaceId = currentSpace.id;
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    let dueDate = Date.parse(document.getElementById("task-due-date").value);
    if (!dueDate) dueDate = 0
    let priority = document.getElementById("task-priority").querySelector("span").innerText;
    if (priority.length === 0) priority = "None";
    const task = { spaceId, name, description, dueDate, priority };
    createTask(task).then(() => handelGetTasks());
    handleCreateTaskModal();
  };

  return (
    <Dialog
      open={openCreateTask}
      handler={handleCreateTaskModal}
      size="md"
      className="w-full max-w-md"
    >
      <DialogHeader>Create a new Task</DialogHeader>
      <form onSubmit={handleCreateTask}>
        <DialogBody divider className="flex flex-col gap-3">
          <Input
            id="task-name"
            size="lg"
            label="Task Name"
            required
          />
          <div className="flex flexw gap-3">
            <Input
              onBlur={(e) => {
                if (Date.parse(e.target.value) < Date.now()) {
                  document.getElementById("task-due-date").value = "";
                }
              }}
              id="task-due-date"
              size="lg"
              label="Due Date"
              type="datetime-local"
            />
            <Select id="task-priority" size="lg" label="Priority">
              <Option value="None" className="bg-gray-400 text-white mb-1">
                None
              </Option>
              <Option value="Low" className="bg-cyan-400 text-white mb-1">
                Low
              </Option>
              <Option value="Medium" className=" bg-yellow-700 text-white mb-1">
                Medium
              </Option>
              <Option value="High" className="bg-red-600 text-white mb-1">
                High
              </Option>
            </Select>
          </div>
          <Textarea id="task-description" label="Description" required />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="blue-gray"
            onClick={handleCreateTaskModal}
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
