import React, { useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import { Typography, Button } from "@material-tailwind/react";
import TaskBtn from "../Content/Tasks/Buttons/TaskBtn"
import { getUserTasks } from "../../../controllers/tasks/functions";
import NewTaskBtn from "../Content/Tasks/Buttons/NewTaskBtn";
import NewTaskModal from "../Content/Tasks/Modals/NewTaskModal";

function SideBarTasks() {
  const { tasks, setTasks, openTasks, handelTasksMenu } = useContext(Context);

  const handelGetTasks = () => getUserTasks().then((tasks) => setTasks(tasks));

  useEffect(() => {
    handelGetTasks();
  }, []);

  return (
    <ul className="my-2 w-full flex flex-col gap-2">
      <Typography
        variant="small"
        color="black"
        className="flex items-center gap-2"
      >
        <Button
          fullWidth
          variant="text"
          color="blue-gray"
          className="flex justify-center items-center gap-2 border"
          onClick={() => {
            handelTasksMenu();
            handelGetTasks()
          }}
        >
          <p
            className={`bg-[#2196F3] text-white rounded-full border-[#DCDCDC] border-[1px] w-[20px] h-[20px] flex items-center justify-center transition-all ${
              openTasks ? "rotate-[-90deg]" : "rotate-[90deg]"
            } `}
          >
            &lt;
          </p>
          <p className="text-[#2196F3]">tasks</p>
        </Button>
        <NewTaskModal />
        <NewTaskBtn />

      </Typography>

      {openTasks ? (
        <>
          {tasks.length > 0 ? (
            <ul className="flex flex-col gap-2 max-h-[110px] overflow-y-auto">
              {tasks.map((task) => (
                <TaskBtn task={task} key={task.id} />
              ))}
            </ul>
          ) : (
            <p className=" text-blue-gray-500 ml-4 text-sm">
              You don't have any task yet ...
            </p>
          )}
        </>
      ) : (
        <></>
      )}
    </ul>
  );
}

export default SideBarTasks;
