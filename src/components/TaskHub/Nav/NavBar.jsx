import React from "react";
import { Navbar } from "@material-tailwind/react";
import NewTaskBtn from "../Content/Tasks/Buttons/NewTaskBtn.jsx";

export default function NavBar() {
  return (
    <Navbar
      color="transparent"
      className="w-full flex items-center justify-end rounded-lg p-0"
      fullWidth={true}
    >
      <NewTaskBtn />
    </Navbar>
  );
}
