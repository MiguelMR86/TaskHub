import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import { getUserTasks } from "../../../../controllers/tasks/functions";
import TaskListBtn from "./Buttons/TaskListBtn";
import EditTaskModal from "./Modals/EditTaskModal";

function TaskList() {
  const { currentSpace, currentTask, setTasks, tasks } =
    useContext(Context);

  const handelGetTasks = () =>
    getUserTasks(currentSpace.id).then((tasks) => setTasks(tasks));

  useEffect(() => {
    handelGetTasks();
  }, [currentSpace, currentTask]);

  return (
    <div className="relative h-full w-full border-4 border-[#DCDCDC] rounded-lg">
      {tasks.length > 0 ? (
        <>
          {currentTask ? (
            <>
              <EditTaskModal />
            </>
          ) : (
            <></>
          )}
          <ul className="flex flex-col gap-2 max-h-full overflow-hidden overflow-y-auto p-4">
            {tasks.map((task) => (
              <TaskListBtn task={task} key={task.id} />
            ))}
          </ul>
        </>
      ) : (
        <p className=" text-blue-gray-500 ml-4 text-sm">
          You don't have any task yet ...
        </p>
      )}
    </div>
  );
}

export default TaskList;
