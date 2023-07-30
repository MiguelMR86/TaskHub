import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import Searcher from "./Searcher";

function SideBarBody() {

  return (
    <ul className="my-2 w-full flex flex-col gap-2">
      <Searcher />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button
          variant="text"
          color="blue-gray"
          onClick={() => window.location.href = "/manager"}
          href="/manager"
        >
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

export default SideBarBody;
