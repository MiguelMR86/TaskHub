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
      <div className='absolute top-3 left-3 hamburger w-[50px] h-[50px] mr-4 select-none bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full z-50'>
        <label>
          <input type='checkbox' onClick={() => setOpenNav(!openNav)}/>
          <svg viewBox='0 0 32 32' className=''>
              <path className='line line-top-bottom' d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
              <path className='line' d='M7 16 27 16'></path>
          </svg>
        </label>
      </div>

      <Navbar className={`absolute w-1/2 top-20 transition-all ${openNav ? 'translate-x-[0]' : ' -translate-x-[200px]'}`}>
        
        <div className="flex items-center justify-start text-blue-gray-900">
          <div className="hidden lg:block">
            <SideBar />
          </div>
        </div>
        
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