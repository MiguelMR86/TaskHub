import React from 'react'
import { TbWorldOff } from "react-icons/tb";
import { Button } from "@material-tailwind/react";
function EditSpaceBtn() {
  return (
    <Button
        variant="text"
        color="blue-gray"
        className="flex justify-between items-center border p-4 text-[#2196F3]"
        >
        <TbWorldOff className="scale-[2]" />
    </Button>
  )
}

export default EditSpaceBtn