import React from "react";
import { TbWorldUpload } from "react-icons/tb";
import { Button } from "@material-tailwind/react";

function NewSpaceBtn() {
  return (
    <Button
      fullWidth
      variant="text"
      color="blue-gray"
      className="flex justify-between items-center"
    >
      New space
      <TbWorldUpload className="scale-[2]" />
    </Button>
  );
}

export default NewSpaceBtn;
