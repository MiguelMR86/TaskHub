import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { updateTaskStatus } from "../../../../../controllers/firebase";
import { handelStatusColor } from "../../../../../controllers/functions";
function StatusMenuBtn({ name }) {
  const { currentTask, setCurrentTask, handelStatusModal } =
    useContext(Context);
  const props = handelStatusColor(name);

  return (
    <button
      name="status-menu-button"
      onClick={() => {
        if (currentTask && currentTask.status !== name) {
          updateTaskStatus(currentTask.id, name).then(() => {
            setCurrentTask({ ...currentTask, status: name });
            handelStatusModal();
          });
        }
      }}
      className={`flex justify-between ${props[1]} items-center gap-4 text-white p-2 rounded-md text-sm border border-blue-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-${props}-300 `}
    >
      {name}
    </button>
  );
}

export default StatusMenuBtn;
