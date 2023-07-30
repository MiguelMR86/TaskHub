import React, { useContext } from "react";
import { Context } from "../../../../../context/Context";
import { Typography } from "@material-tailwind/react";

function UserName() {
  const { user } = useContext(Context);
  return (
    <div>
      <Typography variant="small" color="gray" className="text-xs font-normal">
        @{user.displayName}
      </Typography>
    </div>
  );
}

export default UserName;
