import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { auth } from "../../../../../config/firebase";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import DeleteTaskBtn from "../Buttons/DeleteTaskBtn";
import PriorityFlagBtn from "../Buttons/PriorityFlagBtn";
import { handelDates } from "../../../../../controllers/tasks/functions";
import DueDateBtn from "../Buttons/DueDateBtn";
import DescriptionText from "../Buttons/DescriptionText";
import PriorityFlagModal from "./PriorityFlagModal";

function EditTaskModal() {
  const { openEditTask, handelEditModal, currentTask } = useContext(Context);

  return (
    <Dialog size="xl" open={openEditTask} handler={handelEditModal}>
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-3">
          <div className="-mt-px flex flex-col">
            <Typography variant="h4" color="blue-gray" className="font-medium">
              {currentTask.name}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal"
            >
              @{auth.currentUser.displayName}
            </Typography>
          </div>
          <div className="mt-4">
          <Typography className="text-xs font-normal text-gray-400">
              Creation Date
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs w-fit"
            >
              {handelDates(currentTask.date)}
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PriorityFlagModal />
          <PriorityFlagBtn />
        </div>
      </DialogHeader>

      <DialogBody divider={true} className="p-0">
        <div className="w-full py-3 px-4 border-b border-b-blue-gray-100 flex justify-between">
          {currentTask.dueDate ? (
            <div>
              <DueDateBtn />
            </div>
          ) : (
            <></>
          )}

        </div>
        <hr className="" />
        
        <DescriptionText />

      </DialogBody>
      <DialogFooter className="justify-between">
        <div className="flex items-center gap-16">
          <div>
            <Typography variant="small" color="gray" className="font-normal">
              Views
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              44,082,044
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-normal">
              Downloads
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              553,031
            </Typography>
          </div>
        </div>
        <ConfirmDeleteModal />
        <DeleteTaskBtn />
      </DialogFooter>
    </Dialog>
  );
}

export default EditTaskModal;
