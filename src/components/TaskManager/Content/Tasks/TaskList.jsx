import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import TaskListBtn from "./Buttons/TaskListBtn";
import EditTaskModal from "./Modals/EditTaskModal";

function TaskList() {
  const { currentSpace, currentTask, tasks, handelGetTasks } = useContext(Context);

  useEffect(() => {
    handelGetTasks();
  }, [currentSpace]);

  return (
    <>
      {tasks.length > 0 ? (
        <div className="flex gap-4 h-full">
          <div className="relative h-full w-full border-4 border-[#DCDCDC] rounded-lg">
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TaskList;
