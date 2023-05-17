import React from 'react'
function HamburgerMenu() {
  return (
    <>
        <label className='hamburger w-[50px] h-[50px] mr-4 select-none bg-gradient-to-r from-[#7c4396] to-[#993a76] rounded-full transition-all hover:scale-110 hover:shadow-[0_5px_20px_#993a76]'>
        <input type='checkbox' className=' '/>
        <svg viewBox='0 0 32 32' className=''>
            <path className='line line-top-bottom' d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
            <path className='line' d='M7 16 27 16'></path>
        </svg>
        
        </label>
    </>
  )
}

export default HamburgerMenu