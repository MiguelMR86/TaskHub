import React from "react";
import { Navbar } from "@material-tailwind/react";
import SideBarBtn from '../Side/SideBarBtn.jsx'
import NavList from './NavList.jsx'
import AutoBtn from "./AutoBtn.jsx";

export default function NavBar() {

  return (
    <Navbar color="transparent" className="w-full min-h-[10vh] bg-white border-4 border-[#DCDCDC] rounded-lg" fullWidth={true}>
      <div className="relative flex items-center">
        <SideBarBtn />
        <AutoBtn />
        <NavList />
      </div>
    </Navbar>
  );
}