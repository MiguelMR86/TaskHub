import React, { useContext } from "react";
import { Context } from '../../../context/Context'
import { Button } from "@material-tailwind/react";
import { BsRobot } from "react-icons/bs";
function AutoBtn() {
  const { setCurrentSection } = useContext(Context);

  return (
    <div className="absolute top-2 right-0 flex flex-row items-center gap-10 mr-2 w-[180px]">
      <Button
        color="white"
        className={`h-[85%] flex gap-4 items-center justify-center rounded shadow-xl w-full bg-gradient-to-r from-[#7c4396] to-[#993a76] text-white`}
        onClick={() => setCurrentSection("Automotions")}
      >
        Automotions
        <BsRobot className=" scale-150" />
      </Button>
    </div>
  );
}

export default AutoBtn;
