import React from 'react'
import SideBar from './Side/SideBar'
import NavBar from './Nav/NavBar'

function TaskManager() {
  return (
    <>
      <div  className='flex shadow-[0_10px_20px_rgba(0,0,0,.2)]'>
        <SideBar />
        <NavBar />
      </div>
    </>
  )
}

export default TaskManager