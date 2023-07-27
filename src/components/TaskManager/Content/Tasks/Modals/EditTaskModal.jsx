import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import TtitleTask from "../Buttons/TtitleTask";
import PriorityFlagModal from "./PriorityFlagModal";
import PriorityFlagBtn from "../Buttons/PriorityFlagBtn";
import DueDateBtn from "../Buttons/DueDateBtn";
import DescriptionText from "../Buttons/DescriptionText";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import DeleteTaskBtn from "../Buttons/DeleteTaskBtn";
import TaskDate from "../Buttons/TaskDate";
import TaskLastEdit from "../Buttons/TaskLastEdit";
import TaskUser from "../Buttons/TaskUser";

function EditTaskModal() {
  const { openEditTask, handelEditModal, currentTask } = useContext(Context);

  return (
    <Dialog size="xl" open={openEditTask} handler={handelEditModal}>
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-4 w-full">
          <Button>
            {currentTask.status}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <PriorityFlagModal />
          <PriorityFlagBtn />
        </div>
      </DialogHeader>

      <DialogBody divider={true} className="p-0">
        <div className="w-full py-3 px-4 border-b border-b-blue-gray-100 flex flex-col gap-6 sm:items-center sm:flex-row sm:gap-0">
          <div className="-mt-px flex flex-col ">
            <TtitleTask />
            <TaskUser />
          </div>
          <div>
            <DueDateBtn />
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row">
          <DescriptionText />
          <span className="border border-blue-gray-100" />
          {/* <DescriptionText /> */}
        </div>
      </DialogBody>
      <DialogFooter className="justify-between">
        <div className="w-full flex justify-between items-center gap-4">
          <div className="flex gap-4 sm:gap-10">
            <TaskDate />
            {currentTask.lastEdit != 0 ? <TaskLastEdit /> : <></>}
          </div>
          <ConfirmDeleteModal />
          <DeleteTaskBtn />
        </div>
      </DialogFooter>
    </Dialog>
  );
}

export default EditTaskModal;
