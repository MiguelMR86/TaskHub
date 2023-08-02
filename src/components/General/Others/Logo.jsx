import React from 'react'

function Logo() {
  return (
    <a href="/" className='flex justify-start items-center h-[60px] ml-4'>
      <h1 className='text-3xl font-bold'>TaskHub</h1>    
      <img className="w-[50px] h-[50px] mb-4 transition-all hover:scale-[1.15]" src="/TaskHub-Logo.svg" alt="TaskHub-Full-Logo" />
    </a>
    )
}

export default Logo