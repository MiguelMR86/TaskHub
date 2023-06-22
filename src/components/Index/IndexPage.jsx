import React from 'react'
import NavBar from './Nav/NavBar'
import MainContent from './Main/MainContent'

function IndexPage() {
  return (
    <div className='p-4 bg-[#2196F3]'>
      <NavBar />
      <MainContent />
    </div>
  )
}

export default IndexPage