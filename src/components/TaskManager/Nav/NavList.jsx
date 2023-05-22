import React from 'react'

function NavList() {
  return (
    <div className='flex items-center h-full justify-between'>
        <ul className='flex flex-row ml-4 gap-10'>
            <a href="">
                <li>Board</li>
            </a>
            <a href="">
                <li>Home</li>
            </a>
            <a href="">
                <li>Home</li>
            </a>
            <a href="">
                <li>Calendar</li>
            </a>
        </ul>
        <ul className='mr-4'>
            <a href="">
                <li>Automotions</li>
            </a>
        </ul>
    </div>
  )
}

export default NavList