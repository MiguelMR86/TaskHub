import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import TaskListBtn from "./Buttons/TaskListBtn";
import NewTaskBtn from "./Buttons/NewTaskBtn";

function TaskList() {
  const { currentSpace, currentTask, tasks, handelGetTasks } = useContext(Context);

  useEffect(() => {
    handelGetTasks();
  }, [currentSpace, currentTask]);

  return (
    <>
      {tasks.length > 0 ? (
        <div className="relative flex gap-4 h-[80%] sm:h-[90%] w-full border-4 border-[#DCDCDC] rounded-lg overflow-auto">
            <div className="absolute z-10 bottom-4 right-4">
              <NewTaskBtn />
            </div>
            <ul className="flex flex-col gap-2 max-h-full w-full overflow-hidden overflow-y-auto p-4">
              {tasks.map((task) => (
                <TaskListBtn task={task} key={task.id} />
              ))}
            </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TaskList;
