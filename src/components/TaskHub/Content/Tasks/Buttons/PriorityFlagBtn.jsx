import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";

function PriorityFlagBtn() {
  const { currentTask, openPriority, handelPriorityModal, handelPriorityFlag } = useContext(Context);
  
  const handelPriorityFlagModal = () => {
    if (!openPriority) {
      document.getElementById("priority-menu").classList.remove("hidden");
    } else {
      setTimeout(() => {
        document.getElementById("priority-menu").classList.add("hidden");
      }, 300);
    }
  };
  
  return (
    <button
      name="priority-flag-button"
      className="absolute z-10 -top-[11.53px] right-6 w-fit rounded-xl hover:scale-110 hover:-top-[7px] transition-all duration-300"
      onClick={() => {
        handelPriorityModal();
        handelPriorityFlagModal();
      }}
    >
      
      {currentTask ? (
        <img
          className="h-30 w-11"
          src={handelPriorityFlag(currentTask.priority)}
          alt="flag-img"
        />
      ) : (
        <></>
      )}
    </button>
  );
}

export default PriorityFlagBtn;
