import React, { useState } from "react";

function NavList() {
  const [currentSection, setCurrentSection] = useState("Home");

  return (
    <div className="flex items-center h-full justify-between select-none">
      <ul className="flex flex-row items-center ml-4 gap-6 overflow-y-auto sm:gap-10 lg:gap-16">
        <a
          className={`border-b-4 h-[85%] flex items-center rounded cursor-pointer transition-all  ${currentSection == "Board" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Board")}
        >
          <li>Board</li>
        </a>
        <a
          className={`border-b-4 h-[85%] flex items-center rounded cursor-pointer transition-all  ${currentSection == "List" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("List")}
        >
          <li>List</li>
        </a>
        <a
          className={`border-b-4 h-[85%] flex items-center rounded cursor-pointer transition-all  ${currentSection == "Calendar" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Calendar")}
        >
          <li>Calendar</li>
        </a>
      </ul>
      <ul className="flex flex-row items-center gap-10 mr-4 border-l-2 border-gray-400 pl-4">
        <a
          className={`border-b-4 h-[85%] flex items-center rounded cursor-pointer transition-all  ${currentSection == "Automotions" ? "border-[#993a76]" : "border-transparent hover:border-gray-400"}`}
          onClick={() => setCurrentSection("Automotions")}
        >
          <li>Automotions</li>
        </a>
      </ul>
    </div>
  );
}

export default NavList;
