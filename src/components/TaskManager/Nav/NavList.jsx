import React, { useContext } from "react";
import { Context } from '../../../context/context.jsx'

function NavList() {
  const { currentSection, setCurrentSection } = useContext(Context);

  return (
    <div className="flex flex-wrap items-center w-full h-full justify-center select-none p-4 gap-y-4 mobileXL:justify-between mobileXL:p-0">
      <div className="flex flex-row items-center ml-4 gap-8 mr-4 sm:gap-10 lg:gap-16">
        <a
          className={`border-b-4 h-[85%] flex items-center rounded cursor-pointer transition-all  ${currentSection == "Board" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Board")}
        >
          Board
        </a>
        <a
          className={`border-b-4 h-[85%] flex items-center rounded cursor-pointer transition-all  ${currentSection == "List" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("List")}
        >
          List
        </a>
        <a
          className={`border-b-4 h-[85%] flex items-center rounded cursor-pointer transition-all  ${currentSection == "Calendar" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Calendar")}
        >
          Calendar
        </a>
      </div>
      <div className="flex flex-row items-center gap-10 mr-4 w-full mobileXL:w-auto">
        <a
          className={`border-b-4 h-[85%] w-full flex justify-center items-center rounded cursor-pointer transition-all  ${currentSection == "Automotions" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Automotions")}
        >
          Automotions
        </a>
      </div>
    </div>
  );
}

export default NavList;
