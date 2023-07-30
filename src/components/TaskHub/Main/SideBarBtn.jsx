import React, { useContext } from "react";
import { Context } from '../../../context/Context'

export default function SideBarBtn() {
  const { openSideBar, handelSideBarDisplay } = useContext(Context)

  return (
      <label className='z-20 flex justify-center items-center w-[58px] h-[58px] p-3 rounded-lg select-none scale-90 bg-[#2196F3] cursor-pointer' htmlFor="burger">
        <label className='relative w-[50px] h-[25px] bg-transparent cursor-pointer'>
          <input type="checkbox" id="burger" className="hidden w-full h-full" onClick={handelSideBarDisplay}/>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-0 origin-[left_center] ${openSideBar ? 'rotate-[45deg] top-0 left-[5px]' : ''}`}></span>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-[50%] translate-y-[-50%] ${openSideBar ? 'w-0 opacity-0' : ''} `}></span>
          <span className={`block absolute w-full bg-white p-[2px] rounded-[9px] opacity-1 left-0 rotate-0 transition-all top-[100%] origin-[left_center] translate-y-[-100%] ${openSideBar ? ' rotate-[-45deg] top-[28px] left-[5px]' : ''}`}></span>
        </label>
      </label>
  );
}