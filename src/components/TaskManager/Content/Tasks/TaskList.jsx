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
    <div className="h-full w-full border-4 border-[#DCDCDC] rounded-lg p-4">
      {tasks.length > 0 ? (
        <>
          {currentTask ? (
            <>
              <EditTaskModal />
            </>
          ) : (
            <></>
          )}
          <ul className="flex flex-col gap-2 max-h-full overflow-y-auto">
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
