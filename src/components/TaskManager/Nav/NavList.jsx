import React, { useContext } from "react";
import { Context } from '../../../context/Context'
import { Button } from "@material-tailwind/react";

function NavList() {
  const { currentSection, setCurrentSection } = useContext(Context);

  return (
      <div className="flex ml-2 mt-[70px] mb-10 w-full gap-6 tablet:w-auto tablet:m-0 tablet:my-2 tablet:ml-24 tablet:gap-10">
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
  );
}

export default NavList;
