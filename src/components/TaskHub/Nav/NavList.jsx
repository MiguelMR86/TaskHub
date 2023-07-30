import React, { useContext } from "react";
import { Context } from '../../../context/Context'
import { Button } from "@material-tailwind/react";
import AutoBtn from './AutoBtn'
function NavList() {
  const { currentSection, setCurrentSection } = useContext(Context);

  return (
      <div className="flex justify-between items-center gap-x-6 w-full overflow-x-auto">
        <div className="flex gap-x-6">
          <div>
            <Button
              fullWidth={true}
              color="blue"
              className={`border-b-4 rounded shadow-xl ${currentSection == "Board" ? "  border-blue-800" : "border-gray-300 hover:border-gray-400"}`}
              onClick={() => setCurrentSection("Board")}
            >
              Board
            </Button>
          </div>
          <div>
            <Button
              color="blue"
              className={`border-b-4 rounded shadow-xl ${currentSection == "List" ? "border-blue-800" : "border-gray-300 hover:border-gray-400"}`}
              onClick={() => setCurrentSection("List")}
            >
              List
            </Button>
          </div>
          <div>
            <Button
              color="blue"
              className={`border-b-4 rounded shadow-xl ${currentSection == "Calendar" ? "border-blue-800" : "border-gray-300 hover:border-gray-400"}`}
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
