import React from 'react'
import Logo from './Logo'
import Profile from './Profile/UserBtn'

function NavBar() {
  return (
    <nav className='shadow-md h-[10vh] flex justify-between items-center'>
        
        <div className='flex items-center'>
            <Logo />
            <h1 className=' text-3xl font-bold'>TaskHub</h1>
        </div>

        <div className='flex items-center'>
          <Profile />
        </div>

    </nav>
  )
}

export default NavBar