import React, { useContext, useEffect } from "react";
import { Context } from "../../../../../context/Context";
import PriorityMenuBtn from "../Buttons/PriorityMenuBtn";

function PriorityMenu() {
  const { openPriority } = useContext(Context);
  
  useEffect(() => {
    document.getElementById("priority-menu").classList.add("hidden");
  }, []);
  
  return (
    <div
      onLoad={() => {}}
      id="priority-menu"
      className={`absolute  top-4 right-[70px] z-10 p-4 bg-white w-[160px] rounded shadow-lg shadow-gray-400 transition-all duration-300 transform flex flex-col gap-y-2
     ${openPriority ? "translate-x-1 opacity-1" : "-translate-x-10 opacity-0"
    }`}
    >
        <PriorityMenuBtn name="None" />
        <PriorityMenuBtn name="Low" />
        <PriorityMenuBtn name="Medium" />
        <PriorityMenuBtn name="High" />
    </div>
  );
}

export default PriorityMenu;
