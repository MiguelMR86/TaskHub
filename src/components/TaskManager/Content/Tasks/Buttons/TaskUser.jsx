import React from "react";
import { Typography } from "@material-tailwind/react";
import { auth } from "../../../../../config/firebase";

function TaskUser() {

  return (
    <div>
      <Typography variant="small" color="gray" className="text-xs font-normal">
        @{auth.currentUser.displayName}
      </Typography>
    </div>
  );
}

export default TaskUser;
