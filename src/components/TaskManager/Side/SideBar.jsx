import React, { useContext } from 'react'
import { Context } from '../../../context/Context'
import { Navbar } from "@material-tailwind/react";
import Logo from "../../General/Others/Logo";
import Searcher from './Searcher';
import SideBarContent from "./SideBarContent";
import HomeBtn from "../../General/Profile/HomeBtn";
import UserBtn from "../../General/Profile/UserBtn";
import SettingsBtn from "../../General/Profile/SettingsBtn";

function SideBar() {
  const { openSideBar } = useContext(Context)

  return (
    <Navbar color="transparent" fullWidth className={`absolute top-0 left-0 w-[300px] h-full bg-white flex flex-col justify-between rounded-lg shadow-[0_5px_25px_rgba(0,0,0,0.3)] transition-all ${openSideBar ? '-translate-x-0' : ' -translate-x-[316px]'}`}>
        <div open={openSideBar}>
          <Logo />
          <Searcher />
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
  )
}

export default SideBar