import React, { useState, useContext } from "react";
import { Context } from "../../../context/Context";
import { Typography, Button } from "@material-tailwind/react";

function SideBarTasks() {
  const { currentSpace } = useContext(Context);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return currentSpace ? (
    <ul className="my-2 w-full flex flex-col gap-2">
      <Typography
        variant="small"
        color="black"
        className="flex items-center gap-2"
      >
        <Button
          variant="text"
          color="blue-gray"
          className="flex justify-between items-center gap-2 border"
          onClick={() => {
            handleOpen(), handelOptions();
          }}
        >
          <p
            className={`bg-[#2196F3] text-white rounded-full border-[#DCDCDC] border-[1px] w-[20px] h-[20px] flex items-center justify-center transition-all ${
              open ? "rotate-[-90deg]" : "rotate-[90deg]"
            } `}
          >
            &lt;
          </p>
          <p className="text-[#2196F3]">Tasks</p>
        </Button>
      </Typography>
    </ul>
  ) : (
    <></>
  );
}

export default SideBarTasks;
