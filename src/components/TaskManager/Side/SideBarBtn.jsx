import React, { useContext } from "react";
import { Context } from '../../../context/Context.jsx'

export default function SideBarBtn() {
  const { openSideBar, setOpenSideBar } = useContext(Context)

  return (
      <div className='flex justify-center items-center w-[58px] h-[58px] ml-1 p-3 rounded-lg select-none scale-90 bg-gradient-to-r from-[#7c4396] to-[#993a76]'>
        <label className="relative w-[50px] h-[25px] bg-transparent cursor-pointer" htmlFor="burger">
          <input type="checkbox" id="burger" className="hidden" onClick={() => setOpenSideBar(!openSideBar)}/>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-0 origin-[left_center] ${openSideBar ? 'rotate-[45deg] top-0 left-[5px]' : ''}`}></span>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-[50%] translate-y-[-50%] ${openSideBar ? 'w-0 opacity-0' : ''} `}></span>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-[100%] origin-[left_center] translate-y-[-100%] ${openSideBar ? ' rotate-[-45deg] top-[28px] left-[5px]' : ''}`}></span>
        </label>
      </div>
  );
}