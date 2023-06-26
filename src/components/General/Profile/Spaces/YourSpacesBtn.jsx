import React from "react";
import { BiWorld } from "react-icons/bi";
import { Button } from "@material-tailwind/react";

function YourSpacesBtn() {
  return (
    <Button
      fullWidth
      variant="text"
      color="blue-gray"
      className="flex justify-between items-center"
    >
      Your spaces
      <BiWorld className="scale-[2]" />
    </Button>
  );
}

export default YourSpacesBtn;
