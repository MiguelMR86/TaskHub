import React, {useState} from "react";
import { Navbar } from "@material-tailwind/react";
import SideBarContent from "./SideBarContent";
import UserBtn from "../../../General/Profile/UserBtn";
import SettingsBtn from "../../../General/Profile/SettingsBtn";
import Logo from "../../../Index/Nav/Logo";
import HomeBtn from "../../../General/Profile/HomeBtn";

export default function SideBar() {
  const [openNav, setOpenNav] = useState(false);
 
  return (
    <>
      <div className='absolute flex justify-center items-center w-[58px] h-[58px] p-3 select-none bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-br-lg'>
        <label className="relative w-[50px] h-[25px] bg-transparent cursor-pointer" htmlFor="burger">
          <input type="checkbox" id="burger" className="hidden" onClick={() => setOpenNav(!openNav)}/>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-0 origin-[left_center] ${openNav ? 'rotate-[45deg] top-0 left-[5px]' : ''}`}></span>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-[50%] translate-y-[-50%] ${openNav ? 'w-0 opacity-0' : ''} `}></span>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-[100%] origin-[left_center] translate-y-[-100%] ${openNav ? ' rotate-[-45deg] top-[28px] left-[5px]' : ''}`}></span>
        </label>
      </div>

      <Navbar fullWidth className={`absolute w-[300px] h-[90vh] flex flex-col justify-between rounded-none rounded-r-lg top-[60px] shadow-[0_5px_25px_rgba(0,0,0,0.3)] transition-all ${openNav ? 'translate-x-[0]' : ' -translate-x-[300px]'}`}>
        <div open={openNav}>
          <Logo />
          <SideBarContent/>
        </div>

        <div id="user-btn" className='w-full h-fit flex gap-2 justify-between items-center'>
          
          <div className="relative flex gap-3">
            <HomeBtn />
            <div className="absolute left-10">
              <UserBtn />
            </div>
          </div>
          
          <SettingsBtn />
          
        </div>

      </Navbar>
    </>
  );
}