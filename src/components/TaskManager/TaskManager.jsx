import React from 'react'
import NavBar from './Nav/NavBar'
import MainContent from './Main/MainContent'
function TaskManager() {
  return (
    <div className='h-screen w-full p-4 flex flex-col gap-4 bg-purple-400'>
      <NavBar />
      <MainContent />
    </div>
  )
}

export default TaskManager