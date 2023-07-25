import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { HiOutlineFolderAdd } from 'react-icons/hi'
import { Button } from "@material-tailwind/react";

function NewTaskBtn() {
    const { openCreateSpace, setOpenCreateSpace } = useContext(Context);
  const handleOpen = () => setOpenCreateSpace(!openCreateSpace);

  return (
    <Button
        onClick={handleOpen}
        variant="text"
        color="blue-gray"
        className="flex justify-between items-center border p-4 text-[#2196F3]"
      >
        <HiOutlineFolderAdd className="scale-[2.8]" />
      </Button>
  )
}

export default NewTaskBtn