import React from "react";
import { Navbar } from "@material-tailwind/react";
import NavList from './NavList.jsx'
import NewTaskBtn from '../Content/Tasks/Buttons/NewTaskBtn.jsx'

export default function NavBar() {

  return (
    <Navbar color="transparent" className="w-full flex items-center justify-between bg-white border-4 border-[#DCDCDC] rounded-lg p-0" fullWidth={true}>
        <NavList />
        <div className="mr-4 pl-4">
          <NewTaskBtn />
        </div>
    </Navbar>
  );
}