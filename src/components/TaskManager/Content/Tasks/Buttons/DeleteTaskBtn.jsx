import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Button } from "@material-tailwind/react";
import { HiOutlineFolderRemove } from "react-icons/hi";

function DeleteTaskBtn() {
  const { handelConfirmDeleteModal } = useContext(Context);
  return (
    <Button 
    onClick={handelConfirmDeleteModal}
    color="red"
    className="w-fit flex items-center justify-center"
    >
      <HiOutlineFolderRemove className="text-white scale-[1.7]"
       />
    </Button>
  );
}

export default DeleteTaskBtn;
