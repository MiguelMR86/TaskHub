import React, { useContext } from "react";
import { Context } from '../../../context/Context'
import { Button } from "@material-tailwind/react";
import { BsRobot } from "react-icons/bs";
function NavList() {
  const { currentSection, setCurrentSection } = useContext(Context);

  return (
    <div className="flex flex-wrap items-center w-full h-full justify-center select-none p-4 gap-y-4 mobileXL:justify-between mobileXL:p-0">
      <div className="flex flex-row flex-wrap items-center justify-center ml-4 gap-6 mr-4 sm:gap-10 lg:gap-16 w-full md:w-auto">
        <Button
          color="white"
          className={`border-b-4 h-[85%] rounded shadow-xl ${currentSection == "Board" ? "border-[#993a76]" : "border-gray-300 hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Board")}
        >
          Board
        </Button>
        <Button
          color="white"
          className={`border-b-4 h-[85%] rounded shadow-xl ${currentSection == "List" ? "border-[#993a76]" : "border-gray-300 hover:border-gray-400"}`}
          onClick={() => setCurrentSection("List")}
        >
          List
        </Button>
        <Button
          color="white"
          className={`border-b-4 h-[85%] rounded shadow-xl ${currentSection == "Calendar" ? "border-[#993a76]" : "border-gray-300 hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Calendar")}
        >
          Calendar
        </Button>
      </div>
      <div className="flex flex-row items-center gap-10 mobileXL:mr-4 w-full md:w-auto">
        <Button
          color="white" 
          className={` h-[85%] flex gap-4 items-center justify-center rounded shadow-xl w-full bg-gradient-to-r from-[#7c4396] to-[#993a76] text-white`}
          onClick={() => setCurrentSection("Automotions")}
        >
          Automotions
          <BsRobot className=" scale-150" />
        </Button>
      </div>
    </div>
  );
}

export default NavList;
