import React from "react";
import { TbWorldOff } from "react-icons/tb";

function EditSpaceBtn() {
  return (
    <button
      variant="text"
      color="blue-gray"
      className="flex justify-between items-center border p-4 text-[#2196F3] rounded-lg hover:bg-blue-gray-50 transition-all duration-300 ease-in-out"
    >
      <TbWorldOff className="scale-[1.7]" />
    </button>
  );
}

export default EditSpaceBtn;
