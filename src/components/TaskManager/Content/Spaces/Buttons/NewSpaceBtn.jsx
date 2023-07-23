import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { TbWorldUpload } from "react-icons/tb";
import { Button } from "@material-tailwind/react";

function NewSpaceBtn() {
  const { openCreateSpace, setOpenCreateSpace } = useContext(Context);
  const handleOpen = () => setOpenCreateSpace(!openCreateSpace);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="text"
        color="blue-gray"
        className="flex justify-between items-center border p-4 text-[#2196F3]"
      >
        <TbWorldUpload className="scale-[2]" />
      </Button>
    </>
  );
}

export default NewSpaceBtn;
