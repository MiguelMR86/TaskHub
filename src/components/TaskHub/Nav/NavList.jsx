import React, { useContext } from "react";
import { Context } from '../../../context/Context'
import { Button } from "@material-tailwind/react";
import AutoBtn from './AutoBtn'
function NavList() {
  const { currentSection, setCurrentSection } = useContext(Context);

  return (
      <div className="flex justify-between items-center gap-x-6 w-full h-full p-4 overflow-x-auto">
        <div className="flex gap-x-6">
          <div>
            <Button
              fullWidth={true}
              color="white"
              className={`border-b-4 rounded shadow-xl ${currentSection == "Board" ? "border-[#2196F3]" : "border-gray-300 hover:border-gray-400"}`}
              onClick={() => setCurrentSection("Board")}
            >
              Board
            </Button>
          </div>
          <div>
            <Button
              color="white"
              className={`border-b-4 rounded shadow-xl ${currentSection == "List" ? "border-[#2196F3]" : "border-gray-300 hover:border-gray-400"}`}
              onClick={() => setCurrentSection("List")}
            >
              List
            </Button>
          </div>
          <div>
            <Button
              color="white"
              className={`border-b-4 rounded shadow-xl ${currentSection == "Calendar" ? "border-[#2196F3]" : "border-gray-300 hover:border-gray-400"}`}
              onClick={() => setCurrentSection("Calendar")}
            >
              Calendar
            </Button>
          </div>
        </div>
        <AutoBtn />
      </div>
  );
}

export default NavList;
