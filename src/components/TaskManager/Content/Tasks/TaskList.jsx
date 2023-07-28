import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import { getUserTasks } from "../../../../controllers/tasks/functions";
import TaskListBtn from "./Buttons/TaskListBtn";
import EditTaskModal from "./Modals/EditTaskModal";
import StartBtn from "./Buttons/StartBtn";

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
        <div className="w-full h-full p-4 grid place-items-center">
          <StartBtn />
        </div>
      )}
    </div>
  );
}

export default TaskList;
