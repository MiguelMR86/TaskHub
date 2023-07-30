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
import PriorityMenu from "../Menus/PriorityMenu";
import PriorityFlagBtn from "../Buttons/PriorityFlagBtn";
import UserName from "../Buttons/UserName";
import DueDateBtn from "../Buttons/DueDateBtn";
import DescriptionText from "../Buttons/DescriptionText";
import SubtaskList from "../SubtaskList";
import Date from "../Buttons/Date";
import LastEdit from "../Buttons/LastEdit";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import DeleteTaskBtn from "../Buttons/DeleteTaskBtn";

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
          <PriorityMenu />
          <PriorityFlagBtn />
        </div>
      </DialogHeader>

      <DialogBody divider={true} className="p-0">
        <div className="w-full py-3 px-4 border-b border-b-blue-gray-100 flex flex-wrap sm:items-center sm:flex-row sm:gap-0">
          <div className="-mt-px flex flex-col mb-4 mr-4">
            <TtitleTask />
            <UserName />
          </div>
          <div className="w-full sm:w-fit">
            <DueDateBtn />
          </div>
        </div>

        <div className="w-full h-[300px] overflow-y-auto flex flex-col md:flex-row">
          <DescriptionText />
          <SubtaskList />
        </div>

      </DialogBody>
      <DialogFooter className="justify-between">
        <div className="w-full flex justify-between items-center gap-4">
          <div className="flex gap-4 sm:gap-10">
            <Date />
            <LastEdit />
          </div>
          <ConfirmDeleteModal />
          <DeleteTaskBtn />
        </div>
      </DialogFooter>
    </Dialog>
  );
}

export default EditTaskModal;
