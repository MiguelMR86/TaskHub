import React, { useContext, useEffect } from "react";
import { Context } from "../../../../../context/Context";
import StatusMenuBtn from "../Buttons/StatusMenuBtn";

function StatusMenu() {
  const { openStatus } =
    useContext(Context);
  useEffect(() => {
    document.getElementById("status-menu").classList.add("hidden");
  }, []);
  return (
    <div
      onLoad={() => {}}
      id="status-menu"
      className={`absolute top-12 z-10 p-4 bg-white w-[160px] rounded shadow-lg shadow-gray-400 transition-all duration-300 transform flex flex-col gap-y-2
     ${openStatus ? "translate-y-1 opacity-1" : "translate-y-10 opacity-0"}`}
    >
          <StatusMenuBtn name="To Do" />
        <StatusMenuBtn name="In Progress" />
        <StatusMenuBtn name="Done" />
      
    </div>
  );
}

export default StatusMenu;
