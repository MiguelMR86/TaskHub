import React, {useState} from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SideBar from "./SideBar";
 
export default function SideBarBtn() {
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

      <Navbar className={`absolute w-[300px] top-20 transition-all ${openNav ? 'translate-x-[0]' : ' -translate-x-[300px]'}`}>
        
        <Collapse open={openNav}>
          <SideBar />
        </Collapse>
      </Navbar>
    </>
  );
}


{/* <button className='absolute top-5 left-3 hamburger w-[50px] h-[50px] mr-4 select-none bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full z-50'
          onClick={() => setOpenNav(!openNav)}
>
          <label>
            <input type='checkbox' className=' '/>
            <svg viewBox='0 0 32 32' className=''>
                <path className='line line-top-bottom' d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
                <path className='line' d='M7 16 27 16'></path>
            </svg>
          </label>
      </button> */}