import React, { useContext } from 'react'
import { Context } from '../../../../../context/Context'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
  } from "@material-tailwind/react";
import { auth } from '../../../../../config/firebase'
import DeleteTaskBtn from '../Buttons/DeleteTaskBtn'

function EditTaskModal() {
    const { openEditTask, handelEditModal, currentTask } = useContext(Context)

    return (
      <Dialog size="xl" open={openEditTask} handler={handelEditModal}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography
                variant="h4"
                color="blue-gray"
                className="font-medium"
              >
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
          </div>
          <div className="flex items-center gap-2">
            <DeleteTaskBtn />
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-4 h-[500px]">
            {currentTask.description}
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
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                clipRule="evenodd"
              />
            </svg>
            Share
          </Button>
        </DialogFooter>
      </Dialog>
  )
}

export default EditTaskModal