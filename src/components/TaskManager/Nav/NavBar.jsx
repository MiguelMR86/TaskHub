import React from "react";
import { Navbar } from "@material-tailwind/react";
import NavList from './NavList.jsx'

export default function NavBar() {

  return (
    <Navbar color="transparent" className="w-full min-h-[100px] bg-white border-4 border-[#DCDCDC] rounded-lg p-0 mb-4" fullWidth={true}>
        <NavList />
    </Navbar>
  );
}