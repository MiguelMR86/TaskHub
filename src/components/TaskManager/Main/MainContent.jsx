import React from 'react'
function MainContent() {
  return (
    <div className='w-full h-full flex flex-wrap gap-4 justify-center items-end rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,.4)] p-4 border-4 border-[#DCDCDC]'>
        <div className='w-full h-[90%] flex justify-center items-center rounded-lg bg-white p-4 border-4 border-[#DCDCDC]'>
          <h1 className='text-4xl font-bold text-[#DCDCDC]'>You don't have any tasks yet</h1>
        </div>
    </div>
  )
}

export default MainContent