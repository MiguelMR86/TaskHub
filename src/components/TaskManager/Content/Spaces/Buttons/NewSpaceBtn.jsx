import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { BsHouseAdd } from "react-icons/bs";

function NewSpaceBtn() {
  const { openCreateSpace, setOpenCreateSpace } = useContext(Context);
  const handleOpen = () => setOpenCreateSpace(!openCreateSpace);

  return (
    <button
      onClick={handleOpen}
      variant="text"
      color="blue-gray"
      className="flex justify-between items-center border p-4 text-[#2196F3] rounded-lg hover:bg-blue-gray-50 transition-all duration-300 ease-in-out"
    >
      <BsHouseAdd className="scale-[1.7]" />
    </button>
  );
}

export default NewSpaceBtn;
