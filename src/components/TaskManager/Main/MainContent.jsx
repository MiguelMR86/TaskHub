import React from 'react'
import SideBarBtn from './SideBarBtn'
import SpaceTitle from './SpaceTitle'
function MainContent() {
  return (
    <div className='w-full h-full flex flex-wrap gap-4 justify-center items-end rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,.4)] p-4 border-4 border-[#DCDCDC]'>
      <SideBarBtn />
      <SpaceTitle />
        <div className='w-full h-[90%] flex justify-center items-center text-center rounded-lg bg-white p-4 border-4 border-[#DCDCDC]'>
          <button className='text-4xl font-bold text-[#DCDCDC] border-4 border-[#DCDCDC] rounded-lg p-4 border-dashed
           hover:text-[#c0c0c0] hover:border-[#c0c0c0] transition-all'
          >
            You haven't selected a space yet
          </button>
        </div>
    </div>
  )
}

export default MainContent