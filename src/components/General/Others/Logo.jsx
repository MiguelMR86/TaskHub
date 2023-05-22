import React from 'react'

function Logo() {
  return (
    <a href="/" className='flex justify-start items-center'>
      <img className="w-[100px] h-[100px] transition-all hover:scale-[1.15]" src="TaskHub-Full-Logo.png" alt="TaskHub-Full-Logo" />
      <h1 className=' text-3xl font-bold text-black'>TaskHub</h1>
    </a>
    )
}

export default Logo