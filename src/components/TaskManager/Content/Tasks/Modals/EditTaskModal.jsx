import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import TtitleTask from "../Buttons/TtitleTask";
import StatusMenu from "../Menus/StatusMenu";
import StatusBtn from "../Buttons/StatusBtn";
import PriorityFlagModal from "./PriorityFlagModal";
import PriorityFlagBtn from "../Buttons/PriorityFlagBtn";
import DueDateBtn from "../Buttons/DueDateBtn";
import DescriptionText from "../Buttons/DescriptionText";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import DeleteTaskBtn from "../Buttons/DeleteTaskBtn";
import TaskDate from "../Buttons/TaskDate";
import TaskLastEdit from "../Buttons/TaskLastEdit";
import TaskUserName from "../Buttons/TaskUserName";

function EditTaskModal() {
  const { openEditTask, handelEditModal } = useContext(Context);

  return (
    <Dialog size="xl"
    className="w-full max-w-md" open={openEditTask} handler={handelEditModal}>
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-4 w-full relative">
          <StatusMenu />
          <StatusBtn />
        </div>
        <div className="flex items-center gap-2">
          <PriorityFlagModal />
          <PriorityFlagBtn />
        </div>
      </DialogHeader>

      <DialogBody divider={true} className="p-0">
        <div className="w-full py-3 px-4 border-b border-b-blue-gray-100 flex flex-wrap sm:items-center sm:flex-row sm:gap-0">
          <div className="-mt-px flex flex-col mb-4 mr-4">
            <TtitleTask />
            <TaskUserName />
          </div>
          <div className="w-full sm:w-fit">
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
            <TaskLastEdit />
          </div>
          <ConfirmDeleteModal />
          <DeleteTaskBtn />
        </div>
      </DialogFooter>
    </Dialog>
  );
}

export default EditTaskModal;
