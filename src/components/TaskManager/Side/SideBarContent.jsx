import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function SideBarContent() {
  return (
      <ul className="my-2 w-full flex flex-col gap-2">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button variant="text" color="blue-gray">
          Home 
        </Button>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button variant="text" color="blue-gray">
          Info 
        </Button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button variant="text" color="blue-gray">
          Notifications 
        </Button>
      </Typography>
    </ul>
  );
}

export default SideBarContent;
