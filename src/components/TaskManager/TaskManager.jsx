import React from 'react'
import NavBar from './Nav/NavBar'
import MainContent from './Main/MainContent'
import SideBar from './Side/SideBar.jsx'

function TaskManager() {
  return (
    <div className='h-screen w-full p-4 flex flex-col gap-4 bg-purple-400'>
      <NavBar />
      <div className='relative h-full flex justify-end'>
        <SideBar />
        <MainContent />
      </div>
    </div>
  )
}

export default TaskManager