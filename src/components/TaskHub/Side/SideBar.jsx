import React, { useContext } from 'react'
import { Context } from '../../../context/Context'
import { Navbar } from "@material-tailwind/react";
import Logo from "../../General/Others/Logo";
import SideBarBody from "./SideBarBody";
import CurrentSpaceBtn from '../Content/Spaces/Buttons/CurrentSpaceBtn';
import UserBtn from '../../General/Profile/UserBtn';
import ConfigBtn from '../../General/Profile/ConfigBtn';
import SideBarSpaces from './SideBarSpaces';
import Divider from '../../General/Others/Divider';

function SideBar() {
  const { openSideBar } = useContext(Context)

  return (
    <Navbar color="transparent" fullWidth className={`absolute top-0 left-0 border-4 border-[#DCDCDC] w-[300px] h-full bg-white flex flex-col justify-between rounded-lg shadow-[0_5px_25px_rgba(0,0,0,0.3)] transition-all z-10 ${openSideBar ? '-translate-x-0' : ' -translate-x-[316px]'}`}>
        <div className='flex flex-col items-end gap-4'>
          <div className='w-[80%]'>
            <Logo />
          </div>
          <SideBarBody/>
          <Divider />
          <SideBarSpaces />
          <Divider />
        </div>

        <div id="user-btn" className='w-full h-fit flex gap-2 justify-between items-center'>
          
          <div className="relative flex gap-3">
            <CurrentSpaceBtn />
            <div className="absolute left-10">
              <UserBtn />
            </div>
          </div>
          
          <ConfigBtn />
          
        </div>

    </Navbar>
  )
}

export default SideBar